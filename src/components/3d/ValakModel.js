import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export default function ValakModel(props) {
    const gltf = useGLTF('/models/valak.glb');
    const { scene, animations } = gltf;
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        // Play the first animation found
        if (actions && Object.keys(actions).length > 0) {
            const firstAction = Object.keys(actions)[0];
            actions[firstAction].reset().fadeIn(0.5).play();
        }

        // Enable shadows for all meshes
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [actions, scene]);

    return <primitive object={scene} {...props} />;
}

useGLTF.preload('/models/valak.glb');
