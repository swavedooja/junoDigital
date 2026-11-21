import React from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '110px 0 90px 0',
  background: `
    radial-gradient(circle at 50% 50%, rgba(255, 184, 0, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 10% 20%, rgba(245, 158, 11, 0.05) 0%, transparent 45%),
    ${theme.custom.gradient.sectionA}
  `,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=srgb&fm=jpg&q=60&w=1400")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: theme.palette.mode === 'dark' ? 0.08 : 0.04,
    zIndex: 0,
    pointerEvents: 'none',
  },
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

// Comparison Card (Others vs Juno)
const ComparisonCard = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.25)' : '1px solid rgba(217, 119, 6, 0.2)',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
}));

const PillarTriangleCard = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(16px)',
  border: '1.5px solid rgba(255, 184, 0, 0.35)',
  borderRadius: '24px',
  padding: theme.spacing(3),
  textAlign: 'center',
  maxWidth: 320,
  width: '100%',
  transition: 'all 0.3s ease',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 184, 0, 0.2)',
  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: '#FFB800',
    boxShadow: '0 16px 40px rgba(255, 184, 0, 0.25)',
  },
}));

const OutcomePill = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.8, 3),
  borderRadius: '50px',
  background: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.75)' : 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(12px)',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.25)' : '1px solid rgba(217, 119, 6, 0.2)',
  flex: 1,
  minWidth: 200,
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#FFB800',
    boxShadow: '0 6px 20px rgba(255, 184, 0, 0.2)',
    transform: 'translateY(-2px)',
  },
}));

const WhyJunoSection: React.FC = () => {
  return (
    <SectionContainer id="why-juno">
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Top Header & Comparison Table Grid */}
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          {/* Top-Left: Headline & Copy */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2.5}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.2,
                  color: 'primary.main',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                }}
              >
                <span>THE JUNO ADVANTAGE</span>
                <Box sx={{ width: 36, height: 2, background: 'currentColor', opacity: 0.6 }} />
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.1rem', sm: '2.6rem', md: '2.9rem' },
                  lineHeight: 1.2,
                }}
              >
                The only restaurant growth partner that unites{' '}
                <GradientText component="span" variant="h2" sx={{ fontWeight: 800 }}>
                  restaurant know-how, food-tech expertise, and execution.
                </GradientText>
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.6 }}
              >
                Strategy, technology, and on-ground execution — together for real restaurant growth.
              </Typography>
            </Stack>
          </Grid>

          {/* Top-Right: Others vs JUNO Comparison Table */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ComparisonCard>
              {/* Table Header */}
              <Grid container sx={{ borderBottom: '1px solid rgba(255, 184, 0, 0.2)' }}>
                <Grid
                  size={{ xs: 6 }}
                  sx={{
                    py: 1.6,
                    px: 2,
                    textAlign: 'center',
                    background: 'rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.secondary', letterSpacing: 0.5 }}>
                    Others
                  </Typography>
                </Grid>
                <Grid
                  size={{ xs: 6 }}
                  sx={{
                    py: 1.6,
                    px: 2,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #FFB800, #F59E0B)',
                    color: '#000',
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, color: '#000', letterSpacing: 1 }}>
                    JUNO ▲
                  </Typography>
                </Grid>
              </Grid>

              {/* Table Rows */}
              {[
                {
                  others: 'Generic, one-size-fits-all',
                  juno: 'Built for restaurants',
                },
                {
                  others: 'Advice without execution',
                  juno: 'Strategy + execution',
                },
                {
                  others: 'Siloed, limited expertise',
                  juno: 'End-to-end restaurant & food-tech capabilities',
                },
              ].map((row, idx) => (
                <Grid
                  container
                  key={idx}
                  sx={{
                    borderBottom: idx !== 2 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                    py: 1.5,
                    px: 1,
                    alignItems: 'center',
                  }}
                >
                  <Grid size={{ xs: 6 }} sx={{ px: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CancelRoundedIcon sx={{ fontSize: 16, color: '#9CA3AF', flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.3 }}>
                      {row.others}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 6 }} sx={{ px: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleRoundedIcon sx={{ fontSize: 16, color: '#FFB800', flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.8rem', lineHeight: 1.3 }}>
                      {row.juno}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </ComparisonCard>
          </Grid>
        </Grid>

        {/* Center Triangular Layout with 3 Pillars & Pedestal */}
        <Box
          sx={{
            position: 'relative',
            mt: { xs: 8, md: 10 },
            mb: { xs: 6, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Background Ambient Golden Beam Triangles (SVG) */}
          <Box
            component="svg"
            viewBox="0 0 800 520"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: 820,
              height: 'auto',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <defs>
              <linearGradient id="beamLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB800" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#D97706" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFB800" stopOpacity="0.8" />
              </linearGradient>
              <filter id="goldGlow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing lines connecting apex to left/right bases and center */}
            <line x1="400" y1="90" x2="180" y2="340" stroke="url(#beamLine)" strokeWidth="2.5" filter="url(#goldGlow)" />
            <line x1="400" y1="90" x2="620" y2="340" stroke="url(#beamLine)" strokeWidth="2.5" filter="url(#goldGlow)" />
            <line x1="180" y1="340" x2="620" y2="340" stroke="url(#beamLine)" strokeWidth="2.5" filter="url(#goldGlow)" />
            <line x1="400" y1="90" x2="400" y2="360" stroke="rgba(255, 184, 0, 0.4)" strokeDasharray="6 6" strokeWidth="1.5" />
          </Box>

          {/* Apex: Food-Tech Expertise */}
          <Box sx={{ zIndex: 2, mb: { xs: 4, md: 5 } }}>
            <PillarTriangleCard>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.2), rgba(245, 158, 11, 0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 1.8,
                  color: '#FFB800',
                  boxShadow: '0 4px 16px rgba(255, 184, 0, 0.25)',
                }}
              >
                <LayersOutlinedIcon sx={{ fontSize: 28 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.15rem' }}>
                Food-Tech Expertise
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                The right platforms, data, and tech to grow orders & revenue.
              </Typography>
            </PillarTriangleCard>
          </Box>

          {/* Middle Row: Left Card, Center Glowing Pedestal, Right Card */}
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            alignItems="center"
            justifyContent="center"
            sx={{ width: '100%', zIndex: 2 }}
          >
            {/* Bottom-Left: Restaurant Understanding */}
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PillarTriangleCard>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.2), rgba(245, 158, 11, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1.8,
                    color: '#FFB800',
                    boxShadow: '0 4px 16px rgba(255, 184, 0, 0.25)',
                  }}
                >
                  <RestaurantIcon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.15rem' }}>
                  Restaurant Understanding
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                  Real restaurant context — menu, customers, market, and operations.
                </Typography>
              </PillarTriangleCard>
            </Grid>

            {/* Center: Glowing 3D Pedestal (Your Digital Restaurant Team) */}
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 290,
                  py: 4,
                  px: 3,
                  borderRadius: '28px',
                  background: 'linear-gradient(180deg, #FFB800 0%, #D97706 70%, #92400E 100%)',
                  textAlign: 'center',
                  color: '#000',
                  boxShadow: '0 0 50px rgba(255, 184, 0, 0.55), 0 15px 35px rgba(0, 0, 0, 0.6), inset 0 2px 0 rgba(255, 255, 255, 0.5)',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 0 70px rgba(255, 184, 0, 0.75), 0 20px 45px rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                {/* Logo badge */}
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: '1rem',
                    letterSpacing: 1.5,
                    color: '#111827',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                    mb: 0.5,
                  }}
                >
                  JUNO ▲
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    color: '#000',
                    lineHeight: 1.25,
                    fontSize: { xs: '1.25rem', sm: '1.45rem' },
                  }}
                >
                  Your Digital Restaurant Team
                </Typography>
              </Box>
            </Grid>

            {/* Bottom-Right: Hands-On Execution */}
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PillarTriangleCard>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.2), rgba(245, 158, 11, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1.8,
                    color: '#FFB800',
                    boxShadow: '0 4px 16px rgba(255, 184, 0, 0.25)',
                  }}
                >
                  <BuildOutlinedIcon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.15rem' }}>
                  Hands-On Execution
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                  We build, run, and improve alongside your team.
                </Typography>
              </PillarTriangleCard>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Outcome Pills */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2.5}
          justifyContent="center"
          sx={{ mt: 5 }}
        >
          <OutcomePill>
            <TrendingUpRoundedIcon sx={{ color: '#FFB800', fontSize: 24 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
              Higher Orders
            </Typography>
          </OutcomePill>

          <OutcomePill>
            <AccountBalanceWalletRoundedIcon sx={{ color: '#FFB800', fontSize: 24 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
              Better Unit Economics
            </Typography>
          </OutcomePill>

          <OutcomePill>
            <RocketLaunchRoundedIcon sx={{ color: '#FFB800', fontSize: 24 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
              Sustainable Growth
            </Typography>
          </OutcomePill>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default WhyJunoSection;
