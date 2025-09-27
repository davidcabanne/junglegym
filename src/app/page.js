import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer";

import styles from "./Page.module.scss";

import MouseContextProvider from "../context/MouseContext";
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <MouseContextProvider>
      <Cursor />
      <main className={styles.main}>
        <Header />
        <Hero />
        <Footer />
      </main>
    </MouseContextProvider>
  );
}
