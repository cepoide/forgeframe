import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export default function CronusModel(props) {
    const gltf = useGLTF('/models/cronus.glb');
    const { scene, animations } = gltf; // Destructure scene and animations
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        // Enable shadows for all meshes
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        // Play the first animation if available
        if (actions && Object.keys(actions).length > 0) {
            const firstAction = Object.keys(actions)[0];
            actions[firstAction].reset().fadeIn(0.5).play();
        }
    }, [actions, scene]);

    return <primitive object={scene} {...props} />;
}

useGLTF.preload('/models/cronus.glb');
