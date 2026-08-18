import { ThemeProvider, CssBaseline } from '@mui/material';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import theme from './theme';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import DifferenceSection from './components/DifferenceSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import OperatingModelSection from './components/OperatingModelSection';
import WhyJunoSection from './components/WhyJunoSection';
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

export default App;