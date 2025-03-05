import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HSBC from "./components/HSBC";
import PortfolioSection from "./components/PortfolioSection";
import TeamSection from "./components/TeamSection";
import ConsultingSection from "./components/ConsultingSection";
import TechIntegration from "./components/TechIntegration";
import RecentResearch from "./components/RecentResearch";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import PartnersSectionHero from "./components/PartnersSectionHero";
import InquirySection from "./components/InquirySection";
import ContactUs from "./components/ContactUs";
import GetInTouchForm from "./components/GetInTouchForm";

// Create page components
const HomePage = () => (
  <>
    <HeroSection />
    <HSBC />
    <PortfolioSection />
    <TeamSection />
    <ConsultingSection />
    <TechIntegration />
    <RecentResearch />
    <PartnersSection />
    <Footer />
  </>
);

const PartnersPage = () => (
  <>
    <PartnersSectionHero />
    <InquirySection />
    <Footer />
  </>
);

const ContactPage = () => (
  <>
    <ContactUs />
    <GetInTouchForm />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/antei-hk" element={<HomePage />} />
          <Route path="/antei-hk/partners" element={<PartnersPage />} />
          <Route path="/antei-hk/contactus" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
