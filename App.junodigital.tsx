import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import theme from './src/theme';
import Navigation from './src/components/Navigation';
import HeroSection from './src/components/HeroSection';
import DifferenceSection from './src/components/DifferenceSection';
import ProblemSection from './src/components/ProblemSection';
import ServicesSection from './src/components/ServicesSection';
import OperatingModelSection from './src/components/OperatingModelSection';
import WhyJunoSection from './src/components/WhyJunoSection';
import CaseStudiesSection from './src/components/CaseStudiesSection';
import WhoWeWorkWithSection from './src/components/WhoWeWorkWithSection';
import AboutSection from './src/components/AboutSection';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

function JunoDigitalApp() {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <HeroSection />
        <DifferenceSection />
        <ProblemSection />
        <ServicesSection />
        <OperatingModelSection />
        <WhyJunoSection />
        <CaseStudiesSection />
        <WhoWeWorkWithSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default JunoDigitalApp;