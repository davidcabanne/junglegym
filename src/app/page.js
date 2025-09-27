import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer";

import styles from "./Page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
