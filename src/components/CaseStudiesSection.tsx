import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Stack 
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ─── Client Logo Imports ──────────────────────────────────────────────
import logoAbdullah from '../assets/client-logos/Abdullah.png';
import logoBabbuHotel from '../assets/client-logos/Babbu_Hotel.png';
import logoDahiyaMomos from '../assets/client-logos/Dahiya_Momos.png';
import logoDarshanTowers from '../assets/client-logos/Darshan_Towers.png';
import logoFouShack from '../assets/client-logos/Fou_Shack.png';
import logoHyderabadBiryani from '../assets/client-logos/Hyderabad_Biryani.png';
import logoMrSalad from '../assets/client-logos/Mr_salad.png';
import logoMrSandwich from '../assets/client-logos/Mr_sandwich.png';
import logoMullaji from '../assets/client-logos/Mullaji.png';
import logoNirvana from '../assets/client-logos/Nirvana.png';
import logoPintuSaoji from '../assets/client-logos/Pintu_Saoji.png';
import logoShabanaBakery from '../assets/client-logos/Shabana_Bakery.png';
import logoShrutiRestaurant from '../assets/client-logos/Shruti_Restaurant.png';
import logoSuryakantSaoji from '../assets/client-logos/Suryakant_Saoji.png';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '100px 0',
  background: `
    radial-gradient(circle at 70% 80%, rgba(255, 184, 0, 0.06) 0%, transparent 50%),
    ${theme.custom.gradient.sectionB}
  `,
  overflow: 'hidden',
}));

// ─── Marquee Styled Components ────────────────────────────────────────

const MarqueeTrack = styled(Box)(() => ({
  display: 'flex',
  width: 'max-content',
  '&.scroll-left': {
    animation: 'marqueeLeft 45s linear infinite',
  },
  '&.scroll-right': {
    animation: 'marqueeRight 45s linear infinite',
  },
  '&:hover': {
    animationPlayState: 'paused',
  },
  '@keyframes marqueeLeft': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-50%)' },
  },
  '@keyframes marqueeRight': {
    from: { transform: 'translateX(-50%)' },
    to: { transform: 'translateX(0)' },
  },
}));

const LogoPill = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 200,
  height: 160,
  margin: '0 16px',
  borderRadius: '20px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.85)',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 4px 16px rgba(0, 0, 0, 0.3)'
    : '0 4px 16px rgba(0, 0, 0, 0.04)',
  backdropFilter: 'blur(12px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  flexShrink: 0,
  '& img': {
    width: 140,
    height: 140,
    objectFit: 'contain',
    display: 'block',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(255, 184, 0, 0.1)'
      : '#FFFFFF',
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-4px)',
    boxShadow: `0 10px 25px ${theme.palette.primary.main}30`,
    '& img': {
      transform: 'scale(1.1)',
    },
  },
}));

// ─── Client Logo Data ─────────────────────────────────────────────────

const clientLogos = [
  { src: logoAbdullah,        alt: 'Abdullah' },
  { src: logoBabbuHotel,      alt: 'Babbu Hotel' },
  { src: logoDahiyaMomos,     alt: 'Dahiya Momos' },
  { src: logoDarshanTowers,   alt: 'Darshan Towers' },
  { src: logoFouShack,        alt: 'Fou Shack' },
  { src: logoHyderabadBiryani,alt: 'Hyderabad Biryani' },
  { src: logoMrSalad,         alt: 'Mr Salad' },
  { src: logoMrSandwich,      alt: 'Mr Sandwich' },
  { src: logoMullaji,         alt: 'Mullaji' },
  { src: logoNirvana,         alt: 'Nirvana' },
  { src: logoPintuSaoji,      alt: 'Pintu Saoji' },
  { src: logoShabanaBakery,   alt: 'Shabana Bakery' },
  { src: logoShrutiRestaurant,alt: 'Shruti Restaurant' },
  { src: logoSuryakantSaoji,  alt: 'Suryakant Saoji' },
];

// Split into two rows so each row has different logos
const logosRow1 = clientLogos.slice(0, 7);
const logosRow2 = clientLogos.slice(7);

const CaseStudiesSection: React.FC = () => {
  return (
    <SectionContainer id="customer-testimonials">
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          
          {/* Heading */}
          <Stack spacing={1.5} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                animation: 'fadeInUp 1s ease-out',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(24px)' },
                  to:   { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Our Trusted{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Visionary
              </Box>{' '}
              Brands
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 650, lineHeight: 1.6, fontWeight: 400 }}
            >
              Restaurants across Maharashtra that trust Juno Digital to power their growth.
            </Typography>
          </Stack>

          {/* Marquee Wrapper — full-bleed with edge fades */}
          <Box
            sx={{
              width: '100vw',
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
              overflow: 'hidden',
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: { xs: '60px', md: '120px' },
                zIndex: 2,
                pointerEvents: 'none',
              },
              '&::before': {
                left: 0,
                background: (theme) => theme.palette.mode === 'dark'
                  ? 'linear-gradient(to right, rgba(0,0,0,0.95), transparent)'
                  : 'linear-gradient(to right, rgba(249,250,251,0.98), transparent)',
              },
              '&::after': {
                right: 0,
                background: (theme) => theme.palette.mode === 'dark'
                  ? 'linear-gradient(to left, rgba(0,0,0,0.95), transparent)'
                  : 'linear-gradient(to left, rgba(249,250,251,0.98), transparent)',
              },
            }}
          >
            <Stack spacing={2} sx={{ py: 2 }}>

              {/* Row 1 — scrolls LEFT */}
              <Box sx={{ overflow: 'hidden' }}>
                <MarqueeTrack className="scroll-left">
                  {logosRow1.map((logo) => (
                    <LogoPill key={`r1a-${logo.alt}`}>
                      <img src={logo.src} alt={logo.alt} />
                    </LogoPill>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {logosRow1.map((logo) => (
                    <LogoPill key={`r1b-${logo.alt}`}>
                      <img src={logo.src} alt={logo.alt} />
                    </LogoPill>
                  ))}
                </MarqueeTrack>
              </Box>

              {/* Row 2 — scrolls RIGHT */}
              <Box sx={{ overflow: 'hidden' }}>
                <MarqueeTrack className="scroll-right">
                  {logosRow2.map((logo) => (
                    <LogoPill key={`r2a-${logo.alt}`}>
                      <img src={logo.src} alt={logo.alt} />
                    </LogoPill>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {logosRow2.map((logo) => (
                    <LogoPill key={`r2b-${logo.alt}`}>
                      <img src={logo.src} alt={logo.alt} />
                    </LogoPill>
                  ))}
                </MarqueeTrack>
              </Box>

            </Stack>
          </Box>

        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default CaseStudiesSection;
