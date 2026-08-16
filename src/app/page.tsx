import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import GridStrip from '@/components/GridStrip';
import Initiatives from '@/components/Initiatives';
import Problems from '@/components/Problems';
import Impact from '@/components/Impact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <GridStrip />
        <Initiatives />
        <Problems />
        <Impact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
