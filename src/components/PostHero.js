'use client';

import { useEffect, useRef } from 'react';
import styles from './PostHero.module.css';

export default function PostHero() {
    const pillarsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentPillars = pillarsRef.current;
        currentPillars.forEach((pillar) => {
            if (pillar) observer.observe(pillar);
        });

        return () => {
            currentPillars.forEach((pillar) => {
                if (pillar) observer.unobserve(pillar);
            });
        };
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.topDivider}>
                <div className={styles.dividerImage} />
            </div>
            <div className={styles.container}>
                <div className={styles.topContent}>
                    <div className={styles.mainHeadline}>
                        <h2 className={styles.title}>
                            IMMERSIVE WEB EXPERIENCES<br />
                            FOR DIGITAL WORLDS & INTERACTIVE PROJECTS
                        </h2>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.mainDescription}>
                            <p className={styles.text}>
                                We design and develop high-impact websites that translate your universe into a strategic digital presence. From early concepts to major launches, we craft immersive platforms built to engage audiences and grow communities.
                            </p>
                        </div>

                        <div className={styles.pillarsContainer}>
                            <div className={styles.pillar} ref={el => pillarsRef.current[0] = el}>
                                <h3 className={styles.pillarTitle}>Narrative-Driven Design</h3>
                                <p className={styles.pillarText}>
                                    Your website should feel like your world — not a template. We align visuals, motion, and tone with your project’s identity.
                                </p>
                            </div>
                            <div className={styles.pillar} ref={el => pillarsRef.current[1] = el}>
                                <h3 className={styles.pillarTitle}>Strategic Conversion</h3>
                                <p className={styles.pillarText}>
                                    Built to support visibility, audience growth, and long-term engagement.
                                </p>
                            </div>
                            <div className={styles.pillar} ref={el => pillarsRef.current[2] = el}>
                                <h3 className={styles.pillarTitle}>Modern Web Technology</h3>
                                <p className={styles.pillarText}>
                                    Interactive, performant, and optimized for immersive storytelling without sacrificing speed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomDivider}>
                <div className={styles.bottomDividerImage} />
            </div>
        </section>
    );
}
