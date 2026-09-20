import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { profile } from "@/data/content";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Ticker text={profile.name} className="mt-10 sm:mt-14" />
        <About />
        <Ticker text={profile.name} />
        <Projects />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
