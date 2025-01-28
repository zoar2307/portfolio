'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
    const containerRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(128, 128);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);

        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
        }

        // Ambient light for overall brightness
        const ambientLight = new THREE.AmbientLight(0xffffff, 5);
        scene.add(ambientLight);

        // Directional light from the top-right with a blue tint
        const directionalLight1 = new THREE.DirectionalLight(0x87ceeb, 4);
        directionalLight1.position.set(5, 5, 5);
        scene.add(directionalLight1);

        // Directional light from the bottom-left with a pink tint
        const directionalLight2 = new THREE.DirectionalLight(0xff69b4, 4);
        directionalLight2.position.set(-5, -5, 5);
        scene.add(directionalLight2);

        // Point light with a yellow tint from the front
        const pointLight1 = new THREE.PointLight(0xffff00, 3, 50);
        pointLight1.position.set(0, 3, 5);
        scene.add(pointLight1);

        // Point light with a green tint from the back
        const pointLight2 = new THREE.PointLight(0x00ff00, 3, 50);
        pointLight2.position.set(0, -3, -5);
        scene.add(pointLight2);

        const loader = new GLTFLoader();
        let object;
        loader.load(
            '/eth_coin.glb',
            (gltf) => {
                object = gltf.scene;
                scene.add(object);
                object.position.set(0, -2, 0);
                object.scale.set(1, 1, 1);
                object.rotation.y = Math.PI / 4;
            }
        );

        camera.position.z = 5;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = false;
        controls.minPolarAngle = Math.PI / 4;
        controls.maxPolarAngle = Math.PI / 2;

        const animate = () => {
            requestAnimationFrame(animate);
            if (object) object.rotation.y += 0.02;
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const resizeCanvas = () => {
            const width = containerRef.current.offsetWidth;
            const height = width;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: '12rem',
                height: '12rem',
                overflow: 'hidden',
                display: 'inline-block',
            }}
        />
    );
};

export default ThreeScene;
