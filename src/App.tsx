import { CssBaseline } from '@mui/material';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ColorModeProvider } from './ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import DifferenceSection from './components/DifferenceSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import OperatingModelSection from './components/OperatingModelSection';
import WhyJunoSection from './components/WhyJunoSection';
import PackagesSection from './components/PackagesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import WhoWeWorkWithSection from './components/WhoWeWorkWithSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const emotionCache = createCache({
  key: "mui",
  prepend: true,
});

function App() {
  return (
    <CacheProvider value={emotionCache}>
      <ColorModeProvider>
        <CssBaseline />
        <Navigation />
        <HeroSection />
        <DifferenceSection />
        <ProblemSection />
        <ServicesSection />
        <OperatingModelSection />
        <WhyJunoSection />
        <PackagesSection />
        <CaseStudiesSection />
        <WhoWeWorkWithSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </ColorModeProvider>
    </CacheProvider>
  );
}

export default App;