import { FC, useRef, useEffect } from 'react';
import * as THREE from 'three';

import Example, { ExampleHandle } from '../components/Example';

export const Component: FC = () => {
  const exampleRef = useRef<ExampleHandle>(null);

  useEffect(() => {
    if (!exampleRef.current || !exampleRef.current.renderer) {
      return;
    }

    const renderer = exampleRef.current.renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return <Example ref={exampleRef} />;
};

Component.displayName = 'Component(RotatedCube)';
