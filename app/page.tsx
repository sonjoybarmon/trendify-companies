import CaseStudiesSection from "./_components/CaseStudiesSection";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import MontageVideoSection from "./_components/MontageVideoSection";
// import OurProcess from "./_components/OurProcess";

export default function Home() {
  return (
    <main>
      <Hero />
      <MontageVideoSection />
      {/* <OurProcess /> */}
      {/* <ShowFlowDemo /> */}
      {/* <InteractiveTools /> */}
      <CaseStudiesSection />
      <Contact />
      <Footer />
    </main>
  );
}
