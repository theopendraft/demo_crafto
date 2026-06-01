import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import MetricStats from "./components/MetricStats.jsx";
import Disciplines from "./components/Disciplines.jsx";
import SelfTalkSteps from "./components/SelfTalkSteps.jsx";
import TrainerShowcase from "./components/TrainerShowcase.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <main>
        <Hero />
        <Benefits />
        <MetricStats />
        <Disciplines />
        <SelfTalkSteps />
        <TrainerShowcase />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
