import styles from './PostHero.module.css';

export default function PostHero() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>The Next Chapter</h2>
                <p className={styles.text}>
                    This space is reserved for what comes next. A void waiting to be filled with purpose and darkness.
                </p>
            </div>
        </section>
    );
}
