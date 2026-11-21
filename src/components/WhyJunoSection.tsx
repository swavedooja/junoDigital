import React from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
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
  minWidth: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    minWidth: 180,
  },
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
                  <Grid size={{ xs: 12, sm: 6 }} sx={{ px: 1.5, py: { xs: 0.6, sm: 0 }, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <CancelRoundedIcon sx={{ fontSize: 16, color: '#9CA3AF', flexShrink: 0, mt: 0.2 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8rem', lineHeight: 1.35 }}>
                      {row.others}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }} sx={{ px: 1.5, pb: { xs: 1, sm: 0 }, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
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

        {/* Phone: stacked pillars. Desktop: triangle diagram. */}
        <Stack spacing={2.5} sx={{ display: { xs: 'flex', md: 'none' }, mt: 6, alignItems: 'center' }}>
          {[
            { title: 'Restaurant Understanding', body: 'Real restaurant context — menu, customers, market, and operations.' },
            { title: 'Food-Tech Expertise', body: 'The right platforms, data, and tech to grow orders and revenue.' },
            { title: 'Hands-On Execution', body: 'We build, run, and improve alongside your team.' },
          ].map((item) => (
            <PillarTriangleCard key={item.title}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.05rem' }}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.88rem', lineHeight: 1.55 }}>{item.body}</Typography>
            </PillarTriangleCard>
          ))}
          <Box
            sx={{
              width: '100%',
              maxWidth: 360,
              py: 3,
              px: 3,
              borderRadius: '24px',
              background: 'linear-gradient(180deg, #FFB800 0%, #D97706 100%)',
              textAlign: 'center',
              color: '#000',
              boxShadow: '0 12px 32px rgba(255, 184, 0, 0.35)',
            }}
          >
            <Typography sx={{ fontWeight: 900, letterSpacing: 1.2, mb: 0.5 }}>JUNO ▲</Typography>
            <Typography variant="h5" sx={{ fontWeight: 900, fontSize: '1.25rem', lineHeight: 1.25 }}>
              Your Digital Restaurant Team
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            width: '100%',
            maxWidth: 920,
            mx: 'auto',
            mt: 8,
            mb: 2,
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 900 640"
            sx={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="beamLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB800" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <polygon points="450,36 70,520 830,520" fill="none" stroke="url(#beamLine)" strokeWidth="2.5" />
            <line x1="450" y1="36" x2="450" y2="520" stroke="rgba(255,184,0,0.4)" strokeDasharray="6 6" strokeWidth="1.5" />

            <polygon points="450,18 260,250 640,250" fill="#101623" stroke="#FFB800" strokeWidth="1.6" />
            <polygon points="225,268 20,530 430,530" fill="#101623" stroke="#FFB800" strokeWidth="1.6" />
            <polygon points="675,268 470,530 880,530" fill="#101623" stroke="#FFB800" strokeWidth="1.6" />

            <foreignObject x="355" y="150" width="190" height="90">
              <div xmlns="http://www.w3.org/1999/xhtml" style={{ textAlign: 'center', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
                <div style={{ fontWeight: 800, fontSize: '15px', lineHeight: 1.25 }}>Food-Tech Expertise</div>
                <div style={{ marginTop: '6px', fontSize: '12px', lineHeight: 1.35, color: '#F3F4F6' }}>
                  The right platforms, data, and tech to grow orders and revenue.
                </div>
              </div>
            </foreignObject>
            <foreignObject x="140" y="400" width="170" height="110">
              <div xmlns="http://www.w3.org/1999/xhtml" style={{ textAlign: 'center', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
                <div style={{ fontWeight: 800, fontSize: '15px', lineHeight: 1.25 }}>Restaurant Understanding</div>
                <div style={{ marginTop: '6px', fontSize: '12px', lineHeight: 1.35, color: '#F3F4F6' }}>
                  Real restaurant context — menu, customers, market, and operations.
                </div>
              </div>
            </foreignObject>
            <foreignObject x="590" y="410" width="170" height="100">
              <div xmlns="http://www.w3.org/1999/xhtml" style={{ textAlign: 'center', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
                <div style={{ fontWeight: 800, fontSize: '15px', lineHeight: 1.25 }}>Hands-On Execution</div>
                <div style={{ marginTop: '6px', fontSize: '12px', lineHeight: 1.35, color: '#F3F4F6' }}>
                  We build, run, and improve alongside your team.
                </div>
              </div>
            </foreignObject>
          </Box>

          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              width: 'min(320px, 70%)',
              mx: 'auto',
              mt: -7,
              py: 2.5,
              px: 3,
              borderRadius: '28px 28px 18px 18px',
              background: 'linear-gradient(180deg, #FFB800 0%, #D97706 72%, #92400E 100%)',
              textAlign: 'center',
              boxShadow: '0 0 48px rgba(255,184,0,0.45)',
              border: '2px solid rgba(255,255,255,0.35)',
            }}
          >
            <Typography sx={{ fontWeight: 900, letterSpacing: 1.4, color: '#111' }}>JUNO ▲</Typography>
            <Typography sx={{ fontWeight: 900, fontSize: { md: '1.25rem', lg: '1.4rem' }, color: '#000', lineHeight: 1.2 }}>
              Your Digital Restaurant Team
            </Typography>
          </Box>
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
