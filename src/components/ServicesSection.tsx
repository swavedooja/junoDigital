import React from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';
import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '110px 0 90px 0',
  background: `
    radial-gradient(circle at 50% 25%, rgba(255, 184, 0, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 85% 75%, rgba(245, 158, 11, 0.05) 0%, transparent 45%),
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

const StepCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.85)' : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(16px)',
  border: '1.5px solid rgba(255, 184, 0, 0.25)',
  borderRadius: '24px',
  padding: theme.spacing(3, 2.5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  minHeight: 'auto',
  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
  zIndex: 2,
  '&:hover': {
    transform: 'translateY(-10px)',
    borderColor: '#FFB800',
    boxShadow: '0 20px 45px rgba(255, 184, 0, 0.25)',
  },
}));

const StepNumberBadge = styled(Box)(() => ({
  position: 'absolute',
  top: -18,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #FFB800, #F59E0B)',
  color: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 900,
  fontSize: '0.85rem',
  boxShadow: '0 4px 14px rgba(255, 184, 0, 0.45)',
  zIndex: 3,
}));

const StepVisualContainer = styled(Box)(() => ({
  width: '100%',
  height: 105,
  borderRadius: '16px',
  background: 'rgba(255, 184, 0, 0.04)',
  border: '1px solid rgba(255, 184, 0, 0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  overflow: 'hidden',
  position: 'relative',
}));

const OutcomesBar = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  padding: theme.spacing(2.5, 2),
  borderRadius: '24px',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, rgba(17, 24, 39, 0.8) 0%, rgba(10, 15, 26, 0.9) 100%)'
    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 250, 251, 0.9) 100%)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 184, 0, 0.22)'
    : '1px solid rgba(217, 119, 6, 0.18)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 16px 36px rgba(0, 0, 0, 0.45)'
    : '0 10px 30px rgba(217, 119, 6, 0.08)',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr',
    padding: theme.spacing(3, 3),
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr auto 1fr auto 1fr',
    alignItems: 'center',
    padding: theme.spacing(3.5, 4),
    marginTop: theme.spacing(8),
  },
}));

const OutcomesItem = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const OutcomesIconBox = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '14px',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(255, 184, 0, 0.18) 0%, rgba(245, 158, 11, 0.08) 100%)'
    : 'linear-gradient(135deg, rgba(254, 243, 199, 1) 0%, rgba(253, 230, 138, 0.7) 100%)',
  border: '1px solid rgba(255, 184, 0, 0.3)',
  color: '#FFB800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));

const ServicesSection: React.FC = () => {
  return (
    <SectionContainer id="services">
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 7 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.1rem', sm: '2.6rem', md: '3.1rem' },
              lineHeight: 1.2,
            }}
          >
            Everything your restaurant needs to{' '}
            <GradientText component="span" variant="h2" sx={{ fontWeight: 800 }}>
              grow online.
            </GradientText>
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: '820px',
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.15rem' },
              lineHeight: 1.6,
            }}
          >
            A streamlined 5-step digital journey to get you online, look great, boost orders, get
            discovered, and grow smarter — all in one place.
          </Typography>
        </Stack>

        {/* 5-Step Journey Visual Flow */}
        <Box sx={{ position: 'relative', pt: 3 }}>
          {/* Glowing Connected Wave SVG running behind the step cards */}
          <Box
            component="svg"
            viewBox="0 0 1200 450"
            sx={{
              position: 'absolute',
              top: '5%',
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1,
              display: { xs: 'none', lg: 'block' },
            }}
          >
            <defs>
              <linearGradient id="journeyLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFB800" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#FFB800" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.9" />
                <stop offset="75%" stopColor="#FFB800" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FDE047" stopOpacity="1" />
              </linearGradient>
              <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ascending curved timeline path */}
            <path
              d="M 120 360 
                 C 230 360, 270 340, 360 320 
                 C 450 300, 500 270, 600 250 
                 C 700 230, 750 200, 840 180 
                 C 930 160, 990 120, 1080 110"
              fill="none"
              stroke="url(#journeyLineGrad)"
              strokeWidth="3.5"
              filter="url(#lineGlow)"
            />

            {/* Glowing Waypoint Nodes along the path */}
            <circle cx="120" cy="360" r="7" fill="#FFB800" filter="url(#lineGlow)" />
            <circle cx="360" cy="320" r="7" fill="#FFB800" filter="url(#lineGlow)" />
            <circle cx="600" cy="250" r="7" fill="#FFB800" filter="url(#lineGlow)" />
            <circle cx="840" cy="180" r="7" fill="#FFB800" filter="url(#lineGlow)" />
            <circle cx="1080" cy="110" r="8" fill="#FDE047" filter="url(#lineGlow)" />
            
            {/* Arrowhead at the end */}
            <polygon points="1085,102 1102,110 1085,118" fill="#FDE047" />
          </Box>

          {/* 5 Cards Grid */}
          <Grid
            container
            spacing={{ xs: 2.5, lg: 2 }}
            alignItems="stretch"
            sx={{
              position: 'relative',
              pl: { xs: 3, lg: 0 },
              '&::before': {
                content: '""',
                display: { xs: 'block', lg: 'none' },
                position: 'absolute',
                left: 8,
                top: 8,
                bottom: 8,
                width: 2,
                borderRadius: 2,
                background: 'linear-gradient(180deg, #FFB800 0%, rgba(255,184,0,0.15) 100%)',
              },
              '& > :nth-of-type(1)': { mt: { lg: 9 } },
              '& > :nth-of-type(2)': { mt: { lg: 6 } },
              '& > :nth-of-type(3)': { mt: { lg: 3 } },
              '& > :nth-of-type(4)': { mt: { lg: 1 } },
              '& > :nth-of-type(5)': { mt: { lg: 0 } },
            }}
          >
            {/* Step 01: Get Online */}
            <Grid size={{ xs: 12, lg: 2.4 }}>
              <StepCard>
                <StepNumberBadge>01</StepNumberBadge>

                <Box>
                  <StepVisualContainer>
                    {/* Laptop Screen with Zomato / Swiggy Mock */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <LaptopMacRoundedIcon sx={{ fontSize: 44, color: '#FFB800' }} />
                      <Stack direction="row" spacing={0.8} sx={{ mt: 0.5 }}>
                        <Box sx={{ px: 0.8, py: 0.2, borderRadius: '4px', background: '#EF4444', color: '#fff', fontSize: '0.62rem', fontWeight: 800 }}>
                          Zomato
                        </Box>
                        <Box sx={{ px: 0.8, py: 0.2, borderRadius: '4px', background: '#F97316', color: '#fff', fontSize: '0.62rem', fontWeight: 800 }}>
                          Swiggy
                        </Box>
                      </Stack>
                    </Box>
                  </StepVisualContainer>

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.8, color: 'text.primary', fontSize: '1.08rem' }}>
                    Get Online
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.82rem', lineHeight: 1.5, mb: 2 }}>
                    Get your restaurant live and ready to take orders.
                  </Typography>
                </Box>

                <Stack spacing={1.2} sx={{ pt: 1, borderTop: '1px solid rgba(255, 184, 0, 0.15)' }}>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <LayersRoundedIcon sx={{ fontSize: 16, color: '#FFB800', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.4 }}>
                      Platform onboarding (Swiggy, Zomato)
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <SettingsRoundedIcon sx={{ fontSize: 16, color: '#FFB800', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.4 }}>
                      Listing & setup
                    </Typography>
                  </Stack>
                </Stack>
              </StepCard>
            </Grid>

            {/* Step 02: Look Better */}
            <Grid size={{ xs: 12, lg: 2.4 }}>
              <StepCard>
                <StepNumberBadge>02</StepNumberBadge>

                <Box>
                  <StepVisualContainer>
                    {/* Camera Framing Food Visual */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: 72,
                        height: 72,
                        borderRadius: '12px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1.5px dashed #FFB800',
                      }}
                    >
                      <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&q=80&w=200"
                        alt="Delicious food"
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <PhotoCameraRoundedIcon
                        sx={{
                          position: 'absolute',
                          bottom: 4,
                          right: 4,
                          fontSize: 16,
                          color: '#FFB800',
                          background: 'rgba(0,0,0,0.6)',
                          borderRadius: '4px',
                          p: 0.2,
                        }}
                      />
                    </Box>
                  </StepVisualContainer>

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.8, color: 'text.primary', fontSize: '1.08rem' }}>
                    Look Better
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.82rem', lineHeight: 1.5, mb: 2 }}>
                    Showcase your food with stunning, order-worthy visuals.
                  </Typography>
                </Box>

                <Stack spacing={1.2} sx={{ pt: 1, borderTop: '1px solid rgba(255, 184, 0, 0.15)' }}>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <PhotoCameraRoundedIcon sx={{ fontSize: 16, color: '#FFB800', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.4 }}>
                      Food photography
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <MenuBookRoundedIcon sx={{ fontSize: 16, color: '#FFB800', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.4 }}>
                      Menu content & item descriptions
                    </Typography>
                  </Stack>
                </Stack>
              </StepCard>
            </Grid>

            {/* Step 03: Sell Better */}
            <Grid size={{ xs: 12, lg: 2.4 }}>
              <StepCard>
                <StepNumberBadge>03</StepNumberBadge>

                <Box>
                  <StepVisualContainer>
                    {/* Smartphone Food App Display */}
                    <Box
                      sx={{
                        width: 50,
                        height: 80,
                        borderRadius: '10px',
                        border: '2px solid #FFB800',
                        background: '#111827',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 0.5,
                      }}
                    >
                      <PhoneIphoneRoundedIcon sx={{ fontSize: 14, color: '#9CA3AF' }} />
                      <Box sx={{ fontSize: '1.2rem', my: -0.2 }}>🍔</Box>
                      <Box
                        sx={{
                          mt: 0.4,
                          px: 0.6,
                          py: 0.2,
                          background: '#FFB800',
                          color: '#000',
                          fontSize: '0.52rem',
                          fontWeight: 900,
                          borderRadius: '3px',
                        }}
                      >
                        Order
                      </Box>
                    </Box>
                  </StepVisualContainer>

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.8, color: 'text.primary', fontSize: '1.08rem' }}>
                    Sell Better
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.82rem', lineHeight: 1.5, mb: 2 }}>
                    Turn your menu into a high-converting ordering experience.
                  </Typography>
                </Box>

                <Stack spacing={1.2} sx={{ pt: 1, borderTop: '1px solid rgba(255, 184, 0, 0.15)' }}>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <DashboardCustomizeRoundedIcon sx={{ fontSize: 16, color: '#FFB800', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.4 }}>
                      Menu engineering & structure
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <LocalOfferRoundedIcon sx={{ fontSize: 16, color: '#FFB800', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.4 }}>
                      Pricing & item optimisation
                    </Typography>
                  </Stack>
                </Stack>
              </StepCard>
            </Grid>

            {/* Step 04: Get Discovered */}
            <Grid size={{ xs: 12, lg: 2.4 }}>
              <StepCard>
                <StepNumberBadge>04</StepNumberBadge>

                <Box>
                  <StepVisualContainer>
                    {/* Megaphone / Announcement */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CampaignRoundedIcon sx={{ fontSize: 52, color: '#FFB800', filter: 'drop-shadow(0 0 10px rgba(255,184,0,0.5))' }} />
                    </Box>
                  </StepVisualContainer>

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.8, color: 'text.primary', fontSize: '1.08rem' }}>
                    Get Discovered
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.82rem', lineHeight: 1.5, mb: 2 }}>
                    Reach more hungry customers in your area.
                  </Typography>
                </Box>

                <Stack spacing={1.2} sx={{ pt: 1, borderTop: '1px solid rgba(255, 184, 0, 0.15)' }}>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <CampaignRoundedIcon sx={{ fontSize: 16, color: '#FFB800', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.4 }}>
                      Platform campaigns & promotions
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <TrackChangesRoundedIcon sx={{ fontSize: 16, color: '#FFB800', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.4 }}>
                      Targeting & performance tracking
                    </Typography>
                  </Stack>
                </Stack>
              </StepCard>
            </Grid>

            {/* Step 05: Grow Smarter */}
            <Grid size={{ xs: 12, lg: 2.4 }}>
              <StepCard>
                <StepNumberBadge>05</StepNumberBadge>

                <Box>
                  <StepVisualContainer>
                    {/* Rising Chart Graphic */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <BarChartRoundedIcon sx={{ fontSize: 48, color: '#FFB800' }} />
                      <TrendingUpRoundedIcon sx={{ fontSize: 32, color: '#FDE047', ml: -1, mt: -2 }} />
                    </Box>
                  </StepVisualContainer>

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.8, color: 'text.primary', fontSize: '1.08rem' }}>
                    Grow Smarter
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.82rem', lineHeight: 1.5, mb: 2 }}>
                    Use data and insights to drive consistent growth.
                  </Typography>
                </Box>

                <Stack spacing={1.2} sx={{ pt: 1, borderTop: '1px solid rgba(255, 184, 0, 0.15)' }}>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <BarChartRoundedIcon sx={{ fontSize: 16, color: '#FFB800', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.4 }}>
                      Sales & performance insights
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <TrendingUpRoundedIcon sx={{ fontSize: 16, color: '#FFB800', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.4 }}>
                      Growth recommendations
                    </Typography>
                  </Stack>
                </Stack>
              </StepCard>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Horizontal Outcomes Bar */}
        <OutcomesBar>
          <OutcomesItem>
            <OutcomesIconBox>
              <RocketLaunchRoundedIcon sx={{ fontSize: 26 }} />
            </OutcomesIconBox>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                A clear journey
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.82rem' }}>
                From setup to scale
              </Typography>
            </Box>
          </OutcomesItem>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '1px',
              height: 36,
              background: 'rgba(255, 184, 0, 0.2)',
            }}
          />

          <OutcomesItem>
            <OutcomesIconBox>
              <AdsClickRoundedIcon sx={{ fontSize: 26 }} />
            </OutcomesIconBox>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                Real business outcomes
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.82rem' }}>
                More orders, better visibility, higher growth
              </Typography>
            </Box>
          </OutcomesItem>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '1px',
              height: 36,
              background: 'rgba(255, 184, 0, 0.2)',
            }}
          />

          <OutcomesItem>
            <OutcomesIconBox>
              <LayersRoundedIcon sx={{ fontSize: 26 }} />
            </OutcomesIconBox>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                One partner, end to end
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.82rem' }}>
                Everything your restaurant needs online
              </Typography>
            </Box>
          </OutcomesItem>
        </OutcomesBar>
      </Container>
    </SectionContainer>
  );
};

export default ServicesSection;
