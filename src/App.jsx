import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProgramSection from "./components/ProgramSection";
import StepsSection from "./components/StepsSection";
import CtaSection from "./components/CtaSection";
import JoinModal from "./components/JoinModal";
import Footer from "./components/Footer";

function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const openJoinModal = () => {
    setIsJoinModalOpen(true);
  };

  const closeJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        <HeroSection onOpenModal={openJoinModal} />
        <ProgramSection />
        <StepsSection />
        <CtaSection onOpenModal={openJoinModal} />
      </main>

      <Footer />

      <JoinModal isOpen={isJoinModalOpen} onClose={closeJoinModal} />
    </div>
  );
}

export default App;