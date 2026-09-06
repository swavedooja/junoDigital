import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import HandymanIcon from '@mui/icons-material/Handyman';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 80% 30%, rgba(255, 184, 0, 0.06) 0%, transparent 50%),
    ${theme.custom.gradient.sectionA}
  `,
  overflow: 'hidden',
}));

const WhyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: theme.custom.surface.card,
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.custom.border.default}`,
  borderRadius: '24px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-10px)',
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: `0 20px 40px ${theme.custom.shadow.cardHover}`,
    '& .pillar-icon': {
      transform: 'scale(1.1)',
      color: theme.palette.secondary.main,
    }
  }
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '16px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}18, ${theme.palette.secondary.main}18)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
}));

const HighlightBanner = styled(Box)(({ theme }) => ({
  background: 'rgba(245, 158, 11, 0.06)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(245, 158, 11, 0.2)',
  borderRadius: '20px',
  padding: theme.spacing(3, 4),
  marginTop: theme.spacing(6),
  width: '100%',
  textAlign: 'center',
}));

const WhyJunoSection: React.FC = () => {
  return (
    <SectionContainer id="why-juno">
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              Not another agency.{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                Not just another dashboard.
              </Box>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '750px', fontWeight: 400, lineHeight: 1.6 }}
            >
              Juno combines the three essential capabilities a modern restaurant needs to grow:
            </Typography>
          </Stack>

          <Grid container spacing={4} alignItems="stretch">
            <Grid size={{ xs: 12, md: 4 }}>
              <WhyCard>
                <CardContent sx={{ p: 4 }}>
                  <IconBox className="pillar-icon">
                    <RestaurantIcon sx={{ fontSize: 32 }} />
                  </IconBox>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    Restaurant Understanding
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    We understand that every restaurant is different — from its menu and customers to its market, pricing, and operational realities.
                  </Typography>
                </CardContent>
              </WhyCard>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <WhyCard>
                <CardContent sx={{ p: 4 }}>
                  <IconBox className="pillar-icon">
                    <DeviceHubIcon sx={{ fontSize: 32 }} />
                  </IconBox>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    Food-Tech Expertise
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    We understand the digital platforms, marketplace ecosystem, data, and technology that increasingly shape how restaurants are discovered and ordered from.
                  </Typography>
                </CardContent>
              </WhyCard>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <WhyCard>
                <CardContent sx={{ p: 4 }}>
                  <IconBox className="pillar-icon">
                    <HandymanIcon sx={{ fontSize: 32 }} />
                  </IconBox>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    Hands-On Execution
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    We don't simply give you recommendations and walk away. We work alongside your team to implement, manage, measure, and continuously improve.
                  </Typography>
                </CardContent>
              </WhyCard>
            </Grid>
          </Grid>

          <HighlightBanner>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
              Think of Juno as your digital restaurant team.
            </Typography>
          </HighlightBanner>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default WhyJunoSection;
