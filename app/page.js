
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Specialties from "../components/Specialties";
import About from "../components/About";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Office from "../components/Office";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Specialties />
      <About />
      <Office />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
