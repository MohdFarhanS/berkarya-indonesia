import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProgramSection from "./components/ProgramSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <ProgramSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;