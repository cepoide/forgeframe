import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a href="#" className={styles.link} aria-label="Twitter">𝕏</a>
                <a href="#" className={styles.link} aria-label="GitHub">🐙</a>
                <a href="#" className={styles.link} aria-label="LinkedIn">💼</a>
            </div>
            <p className={styles.text}>© {new Date().getFullYear()} Premium Landing Page. Built with Next.js.</p>
        </footer>
    );
}
