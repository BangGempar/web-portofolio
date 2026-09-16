import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col gap-y-16 pb-24 pt-32 px-6 md:px-16 max-w-6xl mx-auto w-full">
        <Hero />
        <hr className="border-border" />
        <About />
        <hr className="border-border" />
        <Skills />
        <hr className="border-border" />
        <Certifications />
        <hr className="border-border" />
        <Projects />
        <hr className="border-border" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
