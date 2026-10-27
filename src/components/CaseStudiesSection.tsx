import React from 'react';
import { 
  Box, 
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
  alignItems: 'center',
  width: 'max-content',
  // Row 1 — slow left scroll
  '&.scroll-left': {
    animation: 'marqueeLeft 55s linear infinite',
  },
  // Row 2 — slightly faster right scroll for depth effect
  '&.scroll-right': {
    animation: 'marqueeRight 40s linear infinite',
  },
  // Pause entire row on hover
  '&:hover': {
    animationPlayState: 'paused',
  },
  '@keyframes marqueeLeft': {
    '0%':   { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
  '@keyframes marqueeRight': {
    '0%':   { transform: 'translateX(-50%)' },
    '100%': { transform: 'translateX(0)' },
  },
}));

const LogoPill = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 200,
  height: 160,
  margin: '0 14px',
  borderRadius: '22px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.04)'
    : 'rgba(255, 255, 255, 0.9)',
  border: `1.5px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.07)'
      : 'rgba(0, 0, 0, 0.06)'
  }`,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.06)'
    : '0 6px 20px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
  backdropFilter: 'blur(14px)',
  transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.35s ease',
  cursor: 'pointer',
  flexShrink: 0,
  position: 'relative',
  overflow: 'hidden',
  // Shine sweep on hover
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-75%',
    width: '50%',
    height: '200%',
    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)',
    transform: 'skewX(-20deg)',
    transition: 'left 0.55s ease',
  },
  '& img': {
    width: 130,
    height: 130,
    objectFit: 'contain',
    display: 'block',
    transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.12))',
  },
  '&:hover': {
    transform: 'translateY(-8px) scale(1.04)',
    borderColor: theme.palette.primary.main,
    boxShadow: theme.palette.mode === 'dark'
      ? `0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px ${theme.palette.primary.main}60, 0 0 20px ${theme.palette.primary.main}25`
      : `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${theme.palette.primary.main}50, 0 0 20px ${theme.palette.primary.main}20`,
    '&::after': {
      left: '125%',
    },
    '& img': {
      transform: 'scale(1.12)',
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

// Both rows use ALL logos — trippled so loop is seamless for both speeds
const logosRow1 = [...clientLogos, ...clientLogos, ...clientLogos];
const logosRow2 = [...clientLogos, ...clientLogos, ...clientLogos];

const CaseStudiesSection: React.FC = () => {
  return (
    <SectionContainer id="customer-testimonials">

      {/* Heading — centred within full width of the section */}
      <Box sx={{ textAlign: 'center', mb: 8, px: 2 }}>
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
          sx={{ mt: 2, fontWeight: 400, lineHeight: 1.6, maxWidth: 680, mx: 'auto' }}
        >
          Restaurants across Maharashtra that trust Juno Digital to power their growth.
        </Typography>
      </Box>

      {/* Marquee — full-bleed: breaks out of any container */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          // Edge fade masks
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: { xs: '80px', md: '180px' },
            zIndex: 2,
            pointerEvents: 'none',
          },
          '&::before': {
            left: 0,
            background: (theme) => theme.palette.mode === 'dark'
              ? 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)'
              : 'linear-gradient(to right, rgba(245,246,250,1) 0%, rgba(245,246,250,0.8) 40%, transparent 100%)',
          },
          '&::after': {
            right: 0,
            background: (theme) => theme.palette.mode === 'dark'
              ? 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)'
              : 'linear-gradient(to left, rgba(245,246,250,1) 0%, rgba(245,246,250,0.8) 40%, transparent 100%)',
          },
        }}
      >
        <Stack spacing={3} sx={{ py: 2 }}>

          {/* Row 1 — scrolls LEFT */}
          <Box sx={{ overflow: 'visible' }}>
            <MarqueeTrack className="scroll-left">
              {logosRow1.map((logo, i) => (
                <LogoPill key={`r1-${logo.alt}-${i}`}>
                  <img src={logo.src} alt={logo.alt} />
                </LogoPill>
              ))}
            </MarqueeTrack>
          </Box>

          {/* Row 2 — scrolls RIGHT, slightly offset top for depth */}
          <Box sx={{ overflow: 'visible', mt: '8px !important' }}>
            <MarqueeTrack className="scroll-right">
              {logosRow2.map((logo, i) => (
                <LogoPill key={`r2-${logo.alt}-${i}`}>
                  <img src={logo.src} alt={logo.alt} />
                </LogoPill>
              ))}
            </MarqueeTrack>
          </Box>

        </Stack>
      </Box>

    </SectionContainer>
  );
};

export default CaseStudiesSection;
