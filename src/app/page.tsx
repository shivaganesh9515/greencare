import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import GridStripSection from "@/components/GridStripSection";
import InitiativesSection from "@/components/InitiativesSection";
import ProblemsSection from "@/components/ProblemsSection";
import ImpactSection from "@/components/ImpactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <MissionSection />
        <GridStripSection />
        <InitiativesSection />
        <ProblemsSection />
        <ImpactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
