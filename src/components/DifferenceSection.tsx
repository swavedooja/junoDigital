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
  marginTop: theme.spacing(6),
  padding: theme.spacing(2.5, 2),
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
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
    padding: theme.spacing(3, 3),
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr auto 1fr auto 1fr',
    alignItems: 'center',
    padding: theme.spacing(3, 4),
  },
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
          <Grid size={{ xs: 12, lg: 5 }}>
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
          <Grid size={{ xs: 12, lg: 4.5 }}>
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
                viewBox="0 0 616 716"
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
                  d="M162,61 L176,96 L193,98 L211,118 L223,122 L266,122 L271,139 L268,145 L278,150 L299,136 L298,126 L308,113 L308,102 L338,87 L350,86 L358,107 L350,105 L347,113 L365,122 L382,119 L392,105 L404,100 L410,109 L435,111 L437,102 L447,101 L456,90 L472,94 L477,107 L487,101 L496,109 L515,98 L519,100 L528,116 L544,128 L529,148 L530,160 L536,162 L539,186 L532,191 L541,193 L541,218 L531,223 L526,233 L534,235 L537,242 L532,262 L557,297 L548,314 L536,306 L531,311 L519,341 L524,357 L515,370 L510,370 L498,357 L499,339 L494,331 L500,325 L501,303 L492,288 L488,284 L478,294 L471,294 L459,286 L454,298 L447,290 L438,290 L439,282 L433,280 L428,269 L406,264 L398,279 L400,298 L392,306 L392,319 L385,319 L378,309 L374,313 L367,338 L378,356 L371,360 L365,381 L356,386 L354,406 L343,404 L345,398 L339,392 L328,417 L316,419 L316,440 L307,446 L302,462 L293,459 L280,472 L283,496 L274,491 L271,497 L267,492 L256,495 L239,485 L234,491 L239,499 L240,528 L229,530 L222,526 L213,539 L199,529 L194,545 L180,553 L177,563 L173,566 L168,560 L156,571 L158,588 L169,595 L168,608 L162,609 L166,616 L161,636 L149,639 L140,653 L132,639 L117,640 L105,612 L96,567 L95,515 L86,457 L73,412 L76,404 L65,346 L64,295 L57,255 L69,228 L78,227 L76,234 L87,242 L96,229 L103,227 L101,212 L107,199 L101,189 L105,182 L118,196 L129,190 L127,185 L135,179 L132,160 L113,141 L121,143 L135,129 L135,119 L158,109 L144,105 L129,111 L125,99 L132,92 L126,81 L146,69 L154,71 L163,62 Z"
                  fill="url(#mhGlowGrad)"
                  stroke="#FFB800"
                  strokeWidth="2.2"
                  filter="url(#neonMapGlow)"
                />

                <circle cx="126" cy="249" r="4" fill="#FFB800" opacity="0.85" />
                <circle cx="220" cy="260" r="4" fill="#FFB800" opacity="0.85" />
                <circle cx="154" cy="552" r="4" fill="#FFB800" opacity="0.85" />
                <circle cx="255" cy="464" r="4" fill="#FFB800" opacity="0.85" />
                <circle cx="367" cy="163" r="4" fill="#FFB800" opacity="0.85" />

                {/* PUNE PIN & BADGE (West-Central) */}
                <g transform="translate(130, 385)">
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
                <g transform="translate(448, 144)">
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
                  bottom: 4,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  maxWidth: 'calc(100% - 16px)',
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
          <Grid size={{ xs: 12, lg: 2.5 }}>
            <Stack direction={{ xs: 'column', sm: 'row', lg: 'column' }} spacing={2}>
              <BadgeCard sx={{ flex: 1 }}>
                <BadgeIconBox>
                  <MapOutlinedIcon sx={{ fontSize: 24 }} />
                </BadgeIconBox>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.3 }}>
                    Beyond Metro Focus
                  </Typography>
                </Box>
              </BadgeCard>

              <BadgeCard sx={{ flex: 1 }}>
                <BadgeIconBox>
                  <RestaurantMenuOutlinedIcon sx={{ fontSize: 24 }} />
                </BadgeIconBox>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.3 }}>
                    Food-Tech Expertise
                  </Typography>
                </Box>
              </BadgeCard>

              <BadgeCard sx={{ flex: 1 }}>
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
