import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';

import Example, { ExampleHandle } from '../components/Example';

export const Component: FC = () => {
  const exampleRef = useRef<ExampleHandle>(null);

  useEffect(() => {
    if (!exampleRef.current || !exampleRef.current.renderer) {
      return;
    }

    const renderer = exampleRef.current.renderer;
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const material = new THREE.LineBasicMaterial({ color: 0xffffff });

    const points = [];

    // draws an M
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(-10, 10, 0));
    points.push(new THREE.Vector3(0, 0, 0));
    points.push(new THREE.Vector3(10, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);

    scene.add(line);
    renderer.render(scene, camera);
  }, []);

  return <Example ref={exampleRef} />;
};

Component.displayName = 'Component(Line)';
