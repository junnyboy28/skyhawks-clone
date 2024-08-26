import Header from './components/Header';
import Hero from './components/Hero';
import LifeSkills from './components/LifeSkills';
import SkySports from './components/skysport';
import ReachSection from './components/ReachSection';
import Testimonials from './components/Testimonials';
import Partnerships from './components/Partnership';
import Signmeup from './components/Signmeup';
import Footer from './components/Footer'; 

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LifeSkills />
      <SkySports />
      <ReachSection />
      <Testimonials />
      <Partnerships />
      <Signmeup />
      <Footer /> 
    </main>
  );
}
