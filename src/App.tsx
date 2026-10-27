import React, { Suspense } from 'react';
import { CssBaseline, Box, CircularProgress } from '@mui/material';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ColorModeProvider } from './ThemeContext';

// ── Critical above-fold: loaded eagerly ──────────────────────────────
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CaseStudiesSection from './components/CaseStudiesSection';

// ── Below-fold: lazy-loaded in chunks ────────────────────────────────
const DifferenceSection    = React.lazy(() => import('./components/DifferenceSection'));
const ProblemSection       = React.lazy(() => import('./components/ProblemSection'));
const ServicesSection      = React.lazy(() => import('./components/ServicesSection'));
const OperatingModelSection = React.lazy(() => import('./components/OperatingModelSection'));
const WhyJunoSection       = React.lazy(() => import('./components/WhyJunoSection'));
const PackagesSection      = React.lazy(() => import('./components/PackagesSection'));
const WhoWeWorkWithSection = React.lazy(() => import('./components/WhoWeWorkWithSection'));
const AboutSection         = React.lazy(() => import('./components/AboutSection'));
const ContactSection       = React.lazy(() => import('./components/ContactSection'));
const Footer               = React.lazy(() => import('./components/Footer'));

const emotionCache = createCache({
  key: "mui",
  prepend: true,
});

// Minimal fallback — invisible spinner so layout doesn't jump
const SectionFallback = () => (
  <Box sx={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <CircularProgress size={32} color="primary" />
  </Box>
);

function App() {
  return (
    <CacheProvider value={emotionCache}>
      <ColorModeProvider>
        <CssBaseline />
        <Navigation />
        <HeroSection />
        <CaseStudiesSection />
        <Suspense fallback={<SectionFallback />}>
          <DifferenceSection />
          <ProblemSection />
          <ServicesSection />
          <OperatingModelSection />
          <WhyJunoSection />
          <PackagesSection />
          <WhoWeWorkWithSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </ColorModeProvider>
    </CacheProvider>
  );
}

export default App;
