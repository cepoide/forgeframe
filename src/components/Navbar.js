import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><Link href="/" className={styles.link}>Home</Link></li>
                <li><span className={styles.link}>Designs</span></li>
                <li><span className={styles.link}>About</span></li>
                <li><span className={styles.link}>Contact</span></li>
            </ul>
            <div className={styles.toggleWrapper}>
                <ThemeToggle />
            </div>
            <div className={styles.bottomBorder} />
        </nav>
    );
}
