import React, { useState } from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemSection } from './components/EcosystemSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsProgramSection } from './components/SkillsProgramSection';
import { InternshipSection } from './components/InternshipSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PartnersSection } from './components/PartnersSection';
import { AboutSection } from './components/AboutSection';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InternshipModal } from './components/InternshipModal';
import { SkillsModal } from './components/SkillsModal';

export function App() {
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);
  const [selectedInternshipTrack, setSelectedInternshipTrack] = useState('');
  
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [selectedSkillProgram, setSelectedSkillProgram] = useState('');

  const [preSelectedServiceId, setPreSelectedServiceId] = useState(null);

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInternship = (trackTitle = '') => {
    setSelectedInternshipTrack(typeof trackTitle === 'string' ? trackTitle : '');
    setIsInternshipModalOpen(true);
  };

  const handleOpenSkills = (programTitle = '') => {
    setSelectedSkillProgram(typeof programTitle === 'string' ? programTitle : '');
    setIsSkillsModalOpen(true);
  };

  const handleSelectServiceForQuote = (serviceId) => {
    setPreSelectedServiceId(serviceId);
    scrollToQuote();
  };

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-[#060913] text-slate-200 antialiased selection:bg-cyan-400 selection:text-black font-sans relative overflow-x-hidden">
        
        {/* Navigation Bar */}
        <Navbar 
          onOpenQuote={scrollToQuote}
          onOpenInternship={() => handleOpenInternship()}
          onOpenSkills={() => handleOpenSkills()}
        />

        {/* Main Sections */}
        <main>
          {/* Hero Section */}
          <Hero 
            onOpenQuote={scrollToQuote}
            onOpenInternship={() => handleOpenInternship()}
            onOpenSkills={() => handleOpenSkills()}
          />

          {/* The Think Community Ecosystem */}
          <EcosystemSection 
            onOpenQuote={scrollToQuote}
            onOpenInternship={() => handleOpenInternship()}
            onOpenSkills={() => handleOpenSkills()}
          />

          {/* Core Services / Enterprise Solutions */}
          <ServicesSection 
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />

          {/* Skills Program / Academy */}
          <SkillsProgramSection 
            onOpenSkills={handleOpenSkills}
          />

          {/* Engineering Internships Program */}
          <InternshipSection 
            onOpenInternship={handleOpenInternship}
          />

          {/* Selected Work & Platforms */}
          <PortfolioSection 
            onOpenQuote={scrollToQuote}
          />

          {/* Collaboration Network & Partners */}
          <PartnersSection 
            onOpenContact={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* About Us: Technology With Purpose */}
          <AboutSection />

          {/* Request a Quote Section */}
          <InteractiveEstimator 
            preSelectedServiceId={preSelectedServiceId}
          />

          {/* Direct Contact Channels */}
          <ContactSection />
        </main>

        {/* Corporate Footer */}
        <Footer 
          onOpenQuote={scrollToQuote}
          onOpenInternship={() => handleOpenInternship()}
        />

        {/* Modals */}
        <InternshipModal 
          isOpen={isInternshipModalOpen}
          onClose={() => setIsInternshipModalOpen(false)}
          defaultTrack={selectedInternshipTrack}
        />

        <SkillsModal 
          isOpen={isSkillsModalOpen}
          onClose={() => setIsSkillsModalOpen(false)}
          defaultProgram={selectedSkillProgram}
        />


      </div>
    </CurrencyProvider>
  );
}

export default App;
