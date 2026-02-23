"use client";


import { useEffect, useState } from 'react';
import { Cinzel_Decorative, Inter } from 'next/font/google';
import styles from './Hero.module.css';
import Scene from './3d/Scene';

const cinzel = Cinzel_Decorative({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    variable: '--font-cinzel'
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});


export default function Hero() {
    const [gridSize, setGridSize] = useState({ columns: 0, rows: 0 });
    const [textIndex, setTextIndex] = useState(0);
    const [layoutTheme, setLayoutTheme] = useState('dark');
    const [isFading, setIsFading] = useState(false);

    const PHRASES = ["WE DREAM", "WE FORGE", "WE MADE IT."];

    useEffect(() => {
        // Observer for Global Theme Changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    const newGlobalTheme = document.documentElement.getAttribute('data-theme');

                    // Trigger Fade Out
                    setIsFading(true);

                    // Wait for fade out, then swap layout and fade in
                    setTimeout(() => {
                        setLayoutTheme(newGlobalTheme);
                        setIsFading(false);
                    }, 500); // 500ms matches CSS transition duration
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });

        // Initial check
        setLayoutTheme(document.documentElement.getAttribute('data-theme') || 'dark');

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % PHRASES.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const calculateGrid = () => {
            const squareSize = 125; // px
            const columns = Math.ceil(window.innerWidth / squareSize);
            const rows = Math.ceil(window.innerHeight / squareSize);
            setGridSize({ columns, rows });
        };

        calculateGrid();
        window.addEventListener('resize', calculateGrid);

        return () => window.removeEventListener('resize', calculateGrid);
    }, []);

    return (
        <section className={styles.hero} data-layout-theme={layoutTheme}>
            <div className={styles.background} aria-hidden="true" />

            <div
                className={styles.sceneContainer}
                style={{ opacity: isFading ? 0 : 1, transition: 'opacity 0.5s ease' }}
            >
                <Scene theme={layoutTheme} />
            </div>

            <div
                className={styles.textContainer}
                style={{ opacity: isFading ? 0 : 1, transition: 'opacity 0.5s ease' }}
            >
                <h1 key={textIndex} className={`${styles.title} ${cinzel.className} ${styles.fadeAnimation}`}>
                    {PHRASES[textIndex]}
                </h1>
                <div className={`${styles.description} ${inter.className}`}>
                    <p>
                        It’s not just a website. It’s the first impression of your video game. We create sites that capture the atmosphere, style, and ambition of your digital universe.
                    </p>
                </div>
            </div>

            <div
                className={styles.gridOverlay}
                style={{
                    '--columns': gridSize.columns,
                    '--rows': gridSize.rows
                }}
            >
                {Array.from({ length: gridSize.columns * gridSize.rows }).map((_, i) => {
                    // Randomly select an icon from 1 to 10
                    const randomIconId = Math.floor(Math.random() * 10) + 1;
                    return (
                        <div key={i} className={styles.square}>
                            <svg className={styles.icon} aria-hidden="true">
                                <use href={`/icons/sprites.svg#icon-q${randomIconId}`} />
                            </svg>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}
