import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Html, ContactShadows } from '@react-three/drei';
import ValakModel from './ValakModel';
import CronusModel from './CronusModel';

export default function Scene({ theme }) {
    return (
        <div style={{ width: '100%', height: '100dvh', position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }}>
            <Canvas
                shadows
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 5], fov: 45 }}
                style={{ pointerEvents: 'none' }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />
                <Environment preset="city" />

                <Suspense fallback={<Html>Loading...</Html>}>
                    {theme === 'light' ? (
                        <CronusModel
                            position={[0.65, -2, 0]}   // Adjusted for Cronus scale if needed
                            scale={0.66}             // Adjusted scale for Cronus
                            rotation={[0, 0, 0]}    // Adjusted rotation
                        />
                    ) : (
                        <ValakModel
                            position={[-0.6, -1.65, 0]}
                            scale={5}
                            rotation={[0, 0.5, 0]}
                        />
                    )}
                </Suspense>
            </Canvas>
        </div>
    );
}

