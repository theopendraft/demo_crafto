import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import MetricStats from "./components/MetricStats.jsx";
import Disciplines from "./components/Disciplines.jsx";
import SelfTalkSteps from "./components/SelfTalkSteps.jsx";
import TrainerShowcase from "./components/TrainerShowcase.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import CursorDot from "./components/CursorDot.jsx";

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <CursorDot />
      <ScrollProgressBar />
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
