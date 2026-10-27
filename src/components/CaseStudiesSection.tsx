import React from 'react';
import { 
  Box, 
  Typography, 
  Stack,
  Container,
  Grid,
  Card,
  CardContent,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

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
  padding: '100px 0 110px 0',
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

// ─── Testimonial Box Styling ──────────────────────────────────────────

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 22,
  padding: '30px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.03)'
    : 'rgba(255, 255, 255, 0.92)',
  backdropFilter: 'blur(18px)',
  border: `1.5px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.07)'
  }`,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 12px 32px rgba(0, 0, 0, 0.35)'
    : '0 10px 30px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.35s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: theme.palette.primary.main,
    boxShadow: theme.palette.mode === 'dark'
      ? `0 22px 48px rgba(0, 0, 0, 0.5), 0 0 25px ${theme.palette.primary.main}30`
      : `0 20px 40px rgba(0, 0, 0, 0.12), 0 0 25px ${theme.palette.primary.main}25`,
  },
}));

const StatCard = styled(Box)(({ theme }) => ({
  padding: '20px 22px',
  borderRadius: '18px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.025)'
    : 'rgba(255, 255, 255, 0.85)',
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.06)'
      : 'rgba(0, 0, 0, 0.06)'
  }`,
  backdropFilter: 'blur(12px)',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-3px)',
  },
}));

// ─── Client Logo Data: Divided into Distinct Sets for Row 1 & Row 2 ───

const clientLogosRow1 = [
  { src: logoAbdullah,        alt: 'Abdullah' },
  { src: logoBabbuHotel,      alt: 'Babbu Hotel' },
  { src: logoDahiyaMomos,     alt: 'Dahiya Momos' },
  { src: logoDarshanTowers,   alt: 'Darshan Towers' },
  { src: logoFouShack,        alt: 'Fou Shack' },
  { src: logoHyderabadBiryani,alt: 'Hyderabad Biryani' },
  { src: logoMrSalad,         alt: 'Mr Salad' },
];

const clientLogosRow2 = [
  { src: logoMrSandwich,      alt: 'Mr Sandwich' },
  { src: logoMullaji,         alt: 'Mullaji' },
  { src: logoNirvana,         alt: 'Nirvana' },
  { src: logoPintuSaoji,      alt: 'Pintu Saoji' },
  { src: logoShabanaBakery,   alt: 'Shabana Bakery' },
  { src: logoShrutiRestaurant,alt: 'Shruti Restaurant' },
  { src: logoSuryakantSaoji,  alt: 'Suryakant Saoji' },
];

// Each row repeated 4 times so the two 50% translation halves loop seamlessly on any viewport
const logosRow1 = [...clientLogosRow1, ...clientLogosRow1, ...clientLogosRow1, ...clientLogosRow1];
const logosRow2 = [...clientLogosRow2, ...clientLogosRow2, ...clientLogosRow2, ...clientLogosRow2];

// ─── Merchant Testimonials Data ───────────────────────────────────────

const merchantTestimonials = [
  {
    name: 'Babbu Hotel',
    role: 'Restaurant Partner',
    tagline: 'P&L & Platform Cost Optimisation',
    logo: logoBabbuHotel,
    quote:
      'JUNO helped us bring better control and structure to our online business. They worked closely on our P&L, identified unnecessary spends and optimised our overall platform costs. Their hands-on approach and regular reviews made a real difference to our profitability on Zomato and Swiggy.',
    metric: 'P&L & Profitability',
  },
  {
    name: 'Pintu Saoji',
    role: 'Restaurant Partner',
    tagline: 'Margin Recovery & Ad Efficiency',
    logo: logoPintuSaoji,
    quote:
      'We were frustrated with the high deductions on our online orders and the returns we were getting for the money being spent. JUNO stepped in, renegotiated our platform terms, cleaned up our ad spends, and improved our margins. Their regular reviews helped us cut down on unnecessary discounts, improve our payout percentage, and keep our online operations sustainable.',
    metric: 'Higher Payout % & Margin Recovery',
  },
  {
    name: 'Abdullah Hotel',
    role: 'Restaurant Partner',
    tagline: '0-to-1 Brand Launch & Scaling',
    logo: logoAbdullah,
    quote:
      'JUNO helped us build Abdullah Hotel from the ground up on Zomato and Swiggy. From designing our logo and menu to positioning the brand, setting up the right pricing, and running targeted promotions, they handled everything. Within months, we went from zero presence to consistent daily orders and strong customer retention.',
    metric: 'Zero to Daily High Volume',
  },
  {
    name: "Shabana's Bakery",
    role: 'Bakery & Dessert Partner',
    tagline: 'Menu Engineering & Repeat Orders',
    logo: logoShabanaBakery,
    quote:
      'JUNO helped us rethink our entire online business. They revamped our menu, stopped campaigns that weren’t delivering the right results, and redirected our advertising spends to where they actually converted. Their ongoing support helped us boost order frequency and significantly increase repeat orders on Swiggy and Zomato.',
    metric: 'Boosted Repeat Orders & Conversion',
  },
  {
    name: 'Mr Sandwich',
    role: 'Quick Service Partner',
    tagline: 'Account Revival & ROI Accountability',
    logo: logoMrSandwich,
    quote:
      'We had stopped operations on Zomato because of a lack of responsive account support and campaigns that had been running for a long time without delivering meaningful results. JUNO helped us rebuild the brand online, brought clear accountability with regular performance reporting, and ensured that every rupee spent delivered actual business.',
    metric: 'Rebuilt Presence & Clean ROI',
  },
  {
    name: 'Mr Salad',
    role: 'Healthy Kitchen Partner',
    tagline: 'Structured Growth & Weekly Governance',
    logo: logoMrSalad,
    quote:
      'JUNO has helped us take a more structured approach to managing our online business, from optimising our menu and advertising spends to identifying opportunities for better profitability. Their proactive account management and clear weekly reporting have given us far more clarity and confidence in our Swiggy and Zomato operations.',
    metric: 'Weekly Clarity & Steady Growth',
  },
];

// ─── Key Metric Highlights ────────────────────────────────────────────

const metricHighlights = [
  {
    stat: '9x',
    label: 'Ad Spend ROI (ROAS)',
    brand: 'Mullaji Biryani',
    note: 'With 80% ad budget reduction',
  },
  {
    stat: '47%',
    label: 'Net Payout Rate',
    brand: 'Suryakant Saoji',
    note: '12% MoM compounded growth',
  },
  {
    stat: '2.5x',
    label: 'Revenue Multiplier',
    brand: 'Fou Shack',
    note: 'Chain-wide scaling in 90 days',
  },
  {
    stat: '50+',
    label: 'Weekly Orders',
    brand: 'Darshan Towers',
    note: 'Accelerated from <20 weekly',
  },
];

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

      {/* ─── Arranged Merchant Testimonials Section ────────────────────── */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 }, px: { xs: 2, sm: 3, md: 4 } }}>
        
        {/* Section Sub-heading */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            icon={<VerifiedRoundedIcon sx={{ fontSize: '18px !important', color: 'primary.main' }} />}
            label="VERIFIED MERCHANT TESTIMONIALS"
            sx={{
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              mb: 2,
              px: 1.5,
              py: 2,
              borderRadius: '50px',
              border: (theme) => `1px solid ${theme.palette.primary.main}40`,
              backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.08)' : 'rgba(255, 184, 0, 0.12)',
              color: 'text.primary',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.85rem', sm: '2.4rem', md: '2.8rem' },
              lineHeight: 1.25,
            }}
          >
            What Restaurant Owners{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Say About Juno
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1.5, maxWidth: 680, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.6 }}
          >
            Real feedback and verified results from founders and restaurant operators who partner with Juno Digital to master Swiggy & Zomato.
          </Typography>
        </Box>

        {/* Quick Impact Metrics Highlights */}
        <Grid container spacing={2.5} sx={{ mb: 6 }}>
          {metricHighlights.map((m, idx) => (
            <Grid size={{ xs: 6, sm: 6, md: 3 }} key={idx}>
              <StatCard>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                  <TrendingUpRoundedIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '-0.02em' }}>
                    {m.stat}
                  </Typography>
                </Stack>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                  {m.label}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block', fontWeight: 500 }}>
                  {m.brand} • {m.note}
                </Typography>
              </StatCard>
            </Grid>
          ))}
        </Grid>

        {/* Arranged Testimonial Boxes */}
        <Grid container spacing={3.5} alignItems="stretch">
          {merchantTestimonials.map((t, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <TestimonialCard>
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 }, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  
                  {/* Top Bar: Quote Icon, Stars, & Metric Tag */}
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.5 }}>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.12)' : 'rgba(255, 184, 0, 0.15)',
                            color: 'primary.main',
                            mr: 1,
                          }}
                        >
                          <FormatQuoteRoundedIcon sx={{ fontSize: 24 }} />
                        </Box>
                        {[...Array(5)].map((_, sIdx) => (
                          <StarRoundedIcon key={sIdx} sx={{ color: '#FFB800', fontSize: 20 }} />
                        ))}
                      </Stack>
                      <Chip
                        label={t.metric}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.72rem',
                          borderRadius: '8px',
                          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
                          color: 'text.secondary',
                        }}
                      />
                    </Stack>

                    {/* Quotation Body */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.primary',
                        fontSize: { xs: '0.94rem', sm: '0.98rem' },
                        lineHeight: 1.75,
                        fontStyle: 'italic',
                        mb: 3,
                      }}
                    >
                      “{t.quote.replace(/^“|”$/g, '')}”
                    </Typography>
                  </Box>

                  {/* Bottom Bar: Logo, Restaurant Name & Verified Status */}
                  <Box
                    sx={{
                      pt: 2.5,
                      borderTop: (theme) => `1px solid ${
                        theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
                      }`,
                    }}
                  >
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        {/* Restaurant Logo Avatar */}
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            borderRadius: '14px',
                            background: '#ffffff',
                            border: '1.5px solid rgba(0, 0, 0, 0.08)',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                            p: 0.6,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={t.logo}
                            alt={t.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                            }}
                          />
                        </Box>
                        
                        {/* Name and Focus */}
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                            {t.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 500 }}>
                            {t.tagline}
                          </Typography>
                        </Box>
                      </Stack>

                      {/* Verified Badge */}
                      <Chip
                        icon={<VerifiedRoundedIcon sx={{ fontSize: '15px !important', color: '#10B981' }} />}
                        label="Verified"
                        size="small"
                        sx={{
                          height: 24,
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.1)',
                          color: '#10B981',
                          border: '1px solid rgba(16, 185, 129, 0.25)',
                        }}
                      />
                    </Stack>
                  </Box>

                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>

      </Container>

    </SectionContainer>
  );
};

export default CaseStudiesSection;
