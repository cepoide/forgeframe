import styles from "./page.module.css";
import Hero from "@/components/Hero";
import PostHero from "@/components/PostHero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <PostHero />
    </main>
  );
}
