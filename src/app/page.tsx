import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Support from "@/components/Support";
import Skills from "@/components/Skills";
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
        <Services />
        <Ticker text={profile.name} />
        <Projects />
        <Process />
        <Support />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
