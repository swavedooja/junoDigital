import React from 'react';
import { Box, Container, Typography, Stack, Grid, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '100px 0 80px 0',
  background: `
    radial-gradient(circle at 10% 30%, rgba(255, 184, 0, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 75% 65%, rgba(245, 158, 11, 0.06) 0%, transparent 45%),
    ${theme.custom.gradient.sectionA}
  `,
  overflow: 'hidden',
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const BadgeCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 2.5),
  background: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.75)' : 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(16px)',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.2)' : '1px solid rgba(217, 119, 6, 0.2)',
  borderRadius: '16px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateX(6px)',
    borderColor: theme.palette.primary.main,
    background: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.08)' : 'rgba(255, 251, 235, 0.95)',
    boxShadow: '0 8px 24px rgba(255, 184, 0, 0.15)',
  },
}));

const BadgeIconBox = styled(Box)(({ theme }) => ({
  width: 44,
  height: 44,
  borderRadius: '12px',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(255, 184, 0, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%)'
    : 'linear-gradient(135deg, rgba(254, 243, 199, 1) 0%, rgba(253, 230, 138, 0.7) 100%)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 184, 0, 0.3)'
    : '1px solid rgba(217, 119, 6, 0.25)',
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));

const StatsBar = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(3, 4),
  borderRadius: '24px',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, rgba(17, 24, 39, 0.8) 0%, rgba(10, 15, 26, 0.9) 100%)'
    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 250, 251, 0.9) 100%)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 184, 0, 0.2)'
    : '1px solid rgba(217, 119, 6, 0.18)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 12px 32px rgba(0, 0, 0, 0.45)'
    : '0 10px 30px rgba(217, 119, 6, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
}));

const StatItem = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const DifferenceSection: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionContainer id="difference">
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
          {/* Left Column: Heading, Subtext, CTA */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3.5}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.1rem' },
                  lineHeight: 1.15,
                  letterSpacing: -0.5,
                }}
              >
                Big restaurant opportunities{' '}
                <GradientText component="span" variant="h2" sx={{ fontWeight: 800 }}>
                  beyond Mumbai.
                </GradientText>
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { xs: '1rem', md: '1.08rem' }, lineHeight: 1.7 }}
              >
                High-growth restaurant markets across Maharashtra are creating new
                opportunities for F&B brands — and we're built for them.
              </Typography>

              <Box sx={{ pt: 1 }}>
                <Button
                  variant="contained"
                  href="#contact"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    color: '#000',
                    fontWeight: 700,
                    px: 3.5,
                    py: 1.5,
                    borderRadius: '50px',
                    fontSize: '0.98rem',
                    textTransform: 'none',
                    boxShadow: '0 8px 24px rgba(255, 184, 0, 0.35)',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                      boxShadow: '0 12px 30px rgba(255, 184, 0, 0.5)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Explore the Opportunity
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* Center Column: Glowing Maharashtra Map */}
          <Grid size={{ xs: 12, md: 4.5 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: 340, sm: 400 },
                p: { xs: 1, sm: 2 },
              }}
            >
              {/* Elliptical Glow Base under the map */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '8%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '85%',
                  height: '75px',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse at center, rgba(255, 184, 0, 0.35) 0%, rgba(245, 158, 11, 0.12) 50%, transparent 75%)',
                  filter: 'blur(10px)',
                  border: '1px solid rgba(255, 184, 0, 0.25)',
                  boxShadow: '0 0 35px rgba(255, 184, 0, 0.3)',
                  pointerEvents: 'none',
                }}
              />

              {/* Maharashtra SVG Map */}
              <Box
                component="svg"
                viewBox="0 0 540 460"
                sx={{
                  width: '100%',
                  maxWidth: 440,
                  height: 'auto',
                  filter: 'drop-shadow(0 0 16px rgba(255, 184, 0, 0.35))',
                  overflow: 'visible',
                }}
              >
                <defs>
                  <linearGradient id="mhGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFB800" stopOpacity="0.22" />
                    <stop offset="50%" stopColor="#D97706" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#111827" stopOpacity="0.3" />
                  </linearGradient>
                  <filter id="neonMapGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="pinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FDE047" />
                    <stop offset="100%" stopColor="#EAB308" />
                  </linearGradient>
                </defs>

                {/* Stylized Maharashtra State Boundary */}
                <path
                  d="M 68 140 
                     C 75 118, 92 105, 115 102
                     C 135 98, 152 82, 172 74
                     C 192 68, 218 72, 240 68
                     C 265 62, 290 52, 315 48
                     C 340 44, 370 54, 395 62
                     C 420 72, 455 78, 475 92
                     C 495 108, 505 130, 498 152
                     C 492 172, 485 192, 490 215
                     C 495 238, 482 258, 465 272
                     C 445 288, 422 292, 400 305
                     C 375 320, 350 338, 325 352
                     C 298 368, 270 380, 240 385
                     C 215 390, 195 405, 170 410
                     C 152 414, 140 398, 135 382
                     C 128 355, 125 325, 118 298
                     C 110 270, 95 245, 88 218
                     C 80 190, 62 165, 68 140 Z"
                  fill="url(#mhGlowGrad)"
                  stroke="#FFB800"
                  strokeWidth="2.4"
                  filter="url(#neonMapGlow)"
                />

                {/* Secondary inner contour lines for tech look */}
                <path
                  d="M 98 155
                     C 130 135, 175 110, 230 102
                     C 290 95, 345 88, 400 105
                     C 445 120, 465 150, 460 190
                     C 455 230, 430 260, 390 280
                     C 340 305, 280 340, 225 355
                     C 175 368, 148 335, 140 280
                     C 132 235, 110 195, 98 155 Z"
                  fill="none"
                  stroke="rgba(255, 184, 0, 0.25)"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />

                {/* Dotted ambient markers for other regional cities */}
                {/* Nashik */}
                <circle cx="165" cy="180" r="3.5" fill="#FFB800" opacity="0.8" />
                <circle cx="165" cy="180" r="7" fill="none" stroke="#FFB800" strokeWidth="0.8" opacity="0.4" />

                {/* Aurangabad / Chhatrapati Sambhajinagar */}
                <circle cx="250" cy="195" r="3.5" fill="#FFB800" opacity="0.8" />
                <circle cx="250" cy="195" r="7" fill="none" stroke="#FFB800" strokeWidth="0.8" opacity="0.4" />

                {/* Kolhapur */}
                <circle cx="170" cy="345" r="3.5" fill="#FFB800" opacity="0.8" />
                <circle cx="170" cy="345" r="7" fill="none" stroke="#FFB800" strokeWidth="0.8" opacity="0.4" />

                {/* Solapur */}
                <circle cx="275" cy="315" r="3.5" fill="#FFB800" opacity="0.8" />
                <circle cx="275" cy="315" r="7" fill="none" stroke="#FFB800" strokeWidth="0.8" opacity="0.4" />

                {/* Amravati */}
                <circle cx="360" cy="140" r="3.5" fill="#FFB800" opacity="0.8" />
                <circle cx="360" cy="140" r="7" fill="none" stroke="#FFB800" strokeWidth="0.8" opacity="0.4" />

                {/* PUNE PIN & BADGE (West-Central) */}
                <g transform="translate(160, 240)">
                  {/* Glowing pulses */}
                  <circle cx="0" cy="0" r="14" fill="rgba(255, 184, 0, 0.2)" />
                  <circle cx="0" cy="0" r="6" fill="#FFB800" filter="url(#neonMapGlow)" />
                  <circle cx="0" cy="0" r="3" fill="#000" />
                  
                  {/* Pin Shape */}
                  <path
                    d="M 0 -26 C -9 -26 -16 -19 -16 -10 C -16 2 0 12 0 12 C 0 12 16 2 16 -10 C 16 -19 9 -26 0 -26 Z"
                    fill="url(#pinGrad)"
                    stroke="#111827"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
                  />
                  <circle cx="0" cy="-12" r="4.5" fill="#111827" />

                  {/* Pune Badge */}
                  <g transform="translate(-28, 16)">
                    <rect
                      x="0"
                      y="0"
                      width="56"
                      height="24"
                      rx="8"
                      fill="#111827"
                      stroke="#FFB800"
                      strokeWidth="1.2"
                    />
                    <text
                      x="28"
                      y="16"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="11.5"
                      fontWeight="700"
                      fontFamily="Poppins, sans-serif"
                    >
                      Pune
                    </text>
                  </g>
                </g>

                {/* NAGPUR PIN & BADGE (East) */}
                <g transform="translate(420, 140)">
                  {/* Glowing pulses */}
                  <circle cx="0" cy="0" r="14" fill="rgba(255, 184, 0, 0.2)" />
                  <circle cx="0" cy="0" r="6" fill="#FFB800" filter="url(#neonMapGlow)" />
                  <circle cx="0" cy="0" r="3" fill="#000" />

                  {/* Pin Shape */}
                  <path
                    d="M 0 -26 C -9 -26 -16 -19 -16 -10 C -16 2 0 12 0 12 C 0 12 16 2 16 -10 C 16 -19 9 -26 0 -26 Z"
                    fill="url(#pinGrad)"
                    stroke="#111827"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
                  />
                  <circle cx="0" cy="-12" r="4.5" fill="#111827" />

                  {/* Nagpur Badge */}
                  <g transform="translate(-32, 16)">
                    <rect
                      x="0"
                      y="0"
                      width="64"
                      height="24"
                      rx="8"
                      fill="#111827"
                      stroke="#FFB800"
                      strokeWidth="1.2"
                    />
                    <text
                      x="32"
                      y="16"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="11.5"
                      fontWeight="700"
                      fontFamily="Poppins, sans-serif"
                    >
                      Nagpur
                    </text>
                  </g>
                </g>
              </Box>

              {/* Emerging Hubs Floating Badge at Bottom-Right of Map */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 12,
                  right: { xs: 0, sm: -10 },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                  px: 2,
                  py: 1,
                  borderRadius: '12px',
                  background: 'rgba(17, 24, 39, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 184, 0, 0.35)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                }}
              >
                <LocationOnRoundedIcon sx={{ fontSize: 18, color: '#FFB800' }} />
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Maharashtra & Emerging Hubs
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: 3 Compact Badge Cards */}
          <Grid size={{ xs: 12, md: 2.5 }}>
            <Stack spacing={2}>
              <BadgeCard>
                <BadgeIconBox>
                  <MapOutlinedIcon sx={{ fontSize: 24 }} />
                </BadgeIconBox>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.3 }}>
                    Beyond Metro Focus
                  </Typography>
                </Box>
              </BadgeCard>

              <BadgeCard>
                <BadgeIconBox>
                  <RestaurantMenuOutlinedIcon sx={{ fontSize: 24 }} />
                </BadgeIconBox>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.3 }}>
                    Food-Tech Expertise
                  </Typography>
                </Box>
              </BadgeCard>

              <BadgeCard>
                <BadgeIconBox>
                  <TrendingUpOutlinedIcon sx={{ fontSize: 24 }} />
                </BadgeIconBox>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.3 }}>
                    Hands-On Execution
                  </Typography>
                </Box>
              </BadgeCard>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Horizontal Stats Bar */}
        <StatsBar>
          <StatItem>
            <BadgeIconBox sx={{ width: 48, height: 48 }}>
              <PeopleAltRoundedIcon sx={{ fontSize: 26 }} />
            </BadgeIconBox>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                100+
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
                Restaurants Supported
              </Typography>
            </Box>
          </StatItem>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '1px',
              height: 36,
              background: 'rgba(255, 184, 0, 0.2)',
            }}
          />

          <StatItem>
            <BadgeIconBox sx={{ width: 48, height: 48 }}>
              <TrendingUpOutlinedIcon sx={{ fontSize: 26 }} />
            </BadgeIconBox>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                3+
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
                Key Markets (Nagpur, Pune +)
              </Typography>
            </Box>
          </StatItem>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '1px',
              height: 36,
              background: 'rgba(255, 184, 0, 0.2)',
            }}
          />

          <StatItem>
            <BadgeIconBox sx={{ width: 48, height: 48 }}>
              <EmojiEventsRoundedIcon sx={{ fontSize: 26 }} />
            </BadgeIconBox>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                98%
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
                Client Satisfaction
              </Typography>
            </Box>
          </StatItem>
        </StatsBar>
      </Container>
    </SectionContainer>
  );
};

export default DifferenceSection;
