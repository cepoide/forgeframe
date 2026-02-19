import styles from './Features.module.css';

const features = [
    {
        title: "Instant Hydration",
        description: "Zero-delay interactivity with our optimized React hydration strategy. Content is interactive the moment it appears.",
        icon: "⚡"
    },
    {
        title: "SEO Optimized",
        description: "Rank higher with server-side rendered content and semantic HTML structure that search engines love.",
        icon: "🔍"
    },
    {
        title: "Premium Design",
        description: "Glassmorphism aesthetics that stand out. Smooth animations and detailed micro-interactions for a high-end feel.",
        icon: "✨"
    }
];

export default function Features() {
    return (
        <section className={styles.section} id="features">
            <div className={styles.container}>
                <h2 className={styles.title}>Why Choose Us</h2>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardText}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
