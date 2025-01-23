'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls

const ThreeScene = () => {
    const containerRef = useRef();

    useEffect(() => {
        // Create scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75, // Field of view
            1,  // Aspect ratio (1:1 for square canvas)
            0.1, // Near clipping plane
            1000 // Far clipping plane
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable transparency
        renderer.setSize(128, 128); // Initial size for 8rem canvas
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0); // Transparent background

        // Append renderer to the DOM
        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
        }

        // Add ambient light to the scene (increased intensity)
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Increased intensity for brighter scene
        scene.add(ambientLight);

        // Add directional light (increased intensity)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // Increased intensity for more powerful light
        directionalLight.position.set(5, 5, 5); // Position the light
        scene.add(directionalLight);

        // Add additional point light for emphasis (increased intensity)
        const pointLight = new THREE.PointLight(0xffffff, 2, 50); // Increased intensity
        pointLight.position.set(0, 5, 5); // Position the point light
        scene.add(pointLight);

        // Add another point light with a different intensity and position (increased intensity)
        const pointLight2 = new THREE.PointLight(0xff0000, 1.5, 50); // Increased intensity for red point light
        pointLight2.position.set(-5, 5, 0); // New position
        scene.add(pointLight2);

        // Add a spotlight with target and shadow (increased intensity)
        const spotLight = new THREE.SpotLight(0x00ff00, 2); // Increased intensity for green spotlight
        spotLight.position.set(0, 10, 0); // Position the spotlight
        spotLight.target.position.set(0, 0, 0); // Point to the center of the object
        scene.add(spotLight);
        scene.add(spotLight.target); // Make sure the spotlight target is added to the scene

        // Load 3D object
        const loader = new GLTFLoader();
        let object;
        loader.load(
            '/tech_icon.glb', // Replace with the path to your 3D object
            (gltf) => {
                object = gltf.scene;
                scene.add(object);

                // Position and scale the object
                object.position.set(0, -2, 0); // Adjust height to fit the canvas
                object.scale.set(17, 17, 17); // Scale the object 1 times bigger

                // Start rotation animation
                object.rotation.y = Math.PI / 4; // Initial rotation on X-axis
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); // Loading progress
            },
            (error) => {
                console.error('An error occurred while loading the model:', error);
            }
        );

        camera.position.z = 5;

        // Initialize OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Smooth controls
        controls.dampingFactor = 0.25; // Damping factor for smoothness
        controls.screenSpacePanning = false; // Disable screen space panning

        // Restrict rotation to the Y-axis only
        controls.enableRotate = true;
        controls.enableZoom = false; // Disable zoom to prevent scaling
        controls.minPolarAngle = Math.PI / 4; // Prevent too much tilt on the X-axis
        controls.maxPolarAngle = Math.PI / 2; // Prevent too much tilt on the X-axis

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the object only on the Y-axis
            if (object) {
                object.rotation.y += 0.01; // Continuous Y-axis rotation
            }

            // Update controls
            controls.update(); // Only required if controls.enableDamping = true, or if controls.enableZoom = true

            // Render the scene
            renderer.render(scene, camera);
        };
        animate();

        // Resize canvas dynamically based on container
        const resizeCanvas = () => {
            const width = containerRef.current.offsetWidth;
            const height = width; // Keep square aspect ratio
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        resizeCanvas(); // Initial resize
        window.addEventListener('resize', resizeCanvas); // On window resize

        // Cleanup
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
