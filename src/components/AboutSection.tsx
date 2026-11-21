import React from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '110px 0 90px 0',
  background: `
    radial-gradient(circle at 20% 40%, rgba(255, 184, 0, 0.08) 0%, transparent 55%),
    radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
    ${theme.custom.gradient.sectionB}
  `,
  overflow: 'hidden',
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const FeatureRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2.2),
  transition: 'transform 0.25s ease',
  '&:hover': {
    transform: 'translateX(6px)',
  },
}));

const FeatureIconCircle = styled(Box)(({ theme }) => ({
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
  boxShadow: '0 4px 16px rgba(255, 184, 0, 0.15)',
}));

const CollageStatBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.2),
  padding: theme.spacing(1.2, 2),
  borderRadius: '16px',
  background: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(16px)',
  border: '1.5px solid rgba(255, 184, 0, 0.35)',
  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.45)',
  zIndex: 4,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    borderColor: '#FFB800',
  },
}));

const BottomStatsBar = styled(Box)(({ theme }) => ({
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
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(2.5),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr',
    alignItems: 'center',
    padding: theme.spacing(3.5, 4),
    marginTop: theme.spacing(8),
  },
}));

const BottomStatItem = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const AboutSection: React.FC = () => {
  return (
    <SectionContainer id="about">
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 7 }} alignItems="center">
          {/* Left Column: Photo Collage with Floating Stat Cards */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 520,
                mx: 'auto',
                minHeight: { xs: 420, sm: 500 },
                overflow: 'hidden',
                borderRadius: '28px',
              }}
            >
              {/* Outer Golden Glow Aura */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '90%',
                  height: '85%',
                  borderRadius: '32px',
                  background: 'radial-gradient(circle, rgba(255, 184, 0, 0.18) 0%, transparent 70%)',
                  filter: 'blur(35px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Photo 1: Top-Left Ambient Dining Hall */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '4%',
                  left: '4%',
                  width: { xs: '42%', sm: 180 },
                  height: { xs: 110, sm: 140 },
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(255, 184, 0, 0.35)',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
                  zIndex: 1,
                  transform: 'rotate(-4deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'rotate(0deg) scale(1.05)', zIndex: 5 },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=srgb&fm=jpg&q=80&w=400"
                  alt="Restaurant interior"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Photo 2: Main Center Restaurateur / Chef */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '16%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: { xs: '62%', sm: 280 },
                  height: { xs: 280, sm: 340 },
                  borderRadius: '28px',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 184, 0, 0.45)',
                  boxShadow: '0 20px 48px rgba(0, 0, 0, 0.55), 0 0 30px rgba(255, 184, 0, 0.25)',
                  zIndex: 2,
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?crop=entropy&cs=srgb&fm=jpg&q=80&w=600"
                  alt="Restaurant team and chef"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 65%, rgba(17, 24, 39, 0.75) 100%)',
                  }}
                />
              </Box>

              {/* Photo 3: Bottom-Right Gourmet Dish */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '6%',
                  right: '5%',
                  width: { xs: '40%', sm: 170 },
                  height: { xs: 100, sm: 130 },
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(255, 184, 0, 0.35)',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
                  zIndex: 3,
                  transform: 'rotate(5deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'rotate(0deg) scale(1.05)', zIndex: 5 },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=srgb&fm=jpg&q=80&w=400"
                  alt="Fine dining dish"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Floating Badge 1: Top-Right "100+ Restaurants Supported" */}
              <CollageStatBadge
                sx={{
                  top: '8%',
                  right: '6%',
                }}
              >
                <StoreRoundedIcon sx={{ color: '#FFB800', fontSize: 24 }} />
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: '1rem', color: 'text.primary', lineHeight: 1.1 }}>
                    100+
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.72rem', fontWeight: 600 }}>
                    Restaurants Supported
                  </Typography>
                </Box>
              </CollageStatBadge>

              {/* Floating Badge 2: Left-Center "98% Client Satisfaction" */}
              <CollageStatBadge
                sx={{
                  top: '46%',
                  left: '5%',
                }}
              >
                <StarRoundedIcon sx={{ color: '#FFB800', fontSize: 24 }} />
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: '1rem', color: 'text.primary', lineHeight: 1.1 }}>
                    98%
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.72rem', fontWeight: 600 }}>
                    Client Satisfaction
                  </Typography>
                </Box>
              </CollageStatBadge>

              {/* Floating Badge 3: Bottom-Center "10+ Years of Experience" */}
              <CollageStatBadge
                sx={{
                  bottom: '8%',
                  left: '8%',
                }}
              >
                <WorkspacePremiumRoundedIcon sx={{ color: '#FFB800', fontSize: 24 }} />
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: '1rem', color: 'text.primary', lineHeight: 1.1 }}>
                    10+
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.72rem', fontWeight: 600 }}>
                    Years of Experience
                  </Typography>
                </Box>
              </CollageStatBadge>
            </Box>
          </Grid>

          {/* Right Column: Mission Heading, Copy & 3 Feature Points */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3.5}>
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
                <span>OUR MISSION</span>
                <Box sx={{ width: 36, height: 2, background: 'currentColor', opacity: 0.6 }} />
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.1rem', sm: '2.6rem', md: '3rem' },
                  lineHeight: 1.2,
                }}
              >
                Powering restaurant growth{' '}
                <GradientText component="span" variant="h2" sx={{ fontWeight: 800 }}>
                  across India.
                </GradientText>
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { xs: '1rem', md: '1.08rem' }, lineHeight: 1.7 }}
              >
                We help restaurant businesses grow with practical, end-to-end digital
                solutions — from visibility to higher orders, and lasting brand value.
              </Typography>

              {/* 3 Core Value Features */}
              <Stack spacing={2.8} sx={{ pt: 1 }}>
                <FeatureRow>
                  <FeatureIconCircle>
                    <RocketLaunchRoundedIcon sx={{ fontSize: 24 }} />
                  </FeatureIconCircle>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '1.1rem', mb: 0.3 }}>
                      Grow Online Orders
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.92rem' }}>
                      Get more diners, more often.
                    </Typography>
                  </Box>
                </FeatureRow>

                <FeatureRow>
                  <FeatureIconCircle>
                    <LayersRoundedIcon sx={{ fontSize: 24 }} />
                  </FeatureIconCircle>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '1.1rem', mb: 0.3 }}>
                      End-to-End Support
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.92rem' }}>
                      From setup to scale, we handle it all.
                    </Typography>
                  </Box>
                </FeatureRow>

                <FeatureRow>
                  <FeatureIconCircle>
                    <LocationOnRoundedIcon sx={{ fontSize: 24 }} />
                  </FeatureIconCircle>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '1.1rem', mb: 0.3 }}>
                      Built for Real India
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.92rem' }}>
                      Local understanding, national capability.
                    </Typography>
                  </Box>
                </FeatureRow>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Full-Width 4-Item Stats Bar */}
        <BottomStatsBar>
          <BottomStatItem>
            <FeatureIconCircle sx={{ width: 44, height: 44 }}>
              <StoreRoundedIcon sx={{ fontSize: 24 }} />
            </FeatureIconCircle>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.15 }}>
                100+
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
                Restaurants Supported
              </Typography>
            </Box>
          </BottomStatItem>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '1px',
              height: 36,
              background: 'rgba(255, 184, 0, 0.2)',
            }}
          />

          <BottomStatItem>
            <FeatureIconCircle sx={{ width: 44, height: 44 }}>
              <StarRoundedIcon sx={{ fontSize: 24 }} />
            </FeatureIconCircle>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.15 }}>
                98%
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
                Client Satisfaction
              </Typography>
            </Box>
          </BottomStatItem>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '1px',
              height: 36,
              background: 'rgba(255, 184, 0, 0.2)',
            }}
          />

          <BottomStatItem>
            <FeatureIconCircle sx={{ width: 44, height: 44 }}>
              <CalendarMonthRoundedIcon sx={{ fontSize: 24 }} />
            </FeatureIconCircle>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.15 }}>
                10+
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
                Years of Experience
              </Typography>
            </Box>
          </BottomStatItem>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '1px',
              height: 36,
              background: 'rgba(255, 184, 0, 0.2)',
            }}
          />

          <BottomStatItem>
            <FeatureIconCircle sx={{ width: 44, height: 44 }}>
              <SupportAgentRoundedIcon sx={{ fontSize: 24 }} />
            </FeatureIconCircle>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.15 }}>
                24/7
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
                Dedicated Support
              </Typography>
            </Box>
          </BottomStatItem>
        </BottomStatsBar>
      </Container>
    </SectionContainer>
  );
};

export default AboutSection;
