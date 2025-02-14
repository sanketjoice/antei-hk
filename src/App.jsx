import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HSBC from "./components/HSBC";
import PortfolioSection from "./components/PortfolioSection";
import TeamSection from "./components/TeamSection";
import ConsultingSection from "./components/ConsultingSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HSBC />
      <PortfolioSection />
      <TeamSection />
      <ConsultingSection />
    </div>
  );
}

export default App;
