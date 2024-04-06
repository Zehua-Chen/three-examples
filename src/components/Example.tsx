import {
  PropsWithChildren,
  useRef,
  useMemo,
  useImperativeHandle,
  useEffect,
  forwardRef,
} from 'react';
import { WebGLRenderer } from 'three';

export interface ExampleHandle {
  renderer?: WebGLRenderer;
}

export interface ExampleProps extends PropsWithChildren {}

const Example = forwardRef<ExampleHandle>((props, ref) => {
  const mainRef = useRef<HTMLElement>(null);
  const rendererRef = useRef<WebGLRenderer>();

  useEffect(() => {
    if (!mainRef.current) {
      return;
    }

    const renderer = new WebGLRenderer();

    rendererRef.current = renderer;

    mainRef.current.appendChild(renderer.domElement);
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);

    return () => {
      mainRef.current?.removeChild(renderer.domElement);
      rendererRef.current?.dispose();
      rendererRef.current = undefined;
    };
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        get renderer() {
          return rendererRef.current;
        },
      };
    },
    []
  );

  return <main ref={mainRef} />;
});

Example.displayName = 'Example';

export default Example;
