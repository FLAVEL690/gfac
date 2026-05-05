import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans selection:bg-gold-500 selection:text-luxury-blue">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Dining />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>

  );
}
