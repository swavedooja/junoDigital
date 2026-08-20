import React from 'react';
import { Box, Container, Typography, Stack, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 10% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
    ${theme.custom.gradient.sectionA}
  `,
  overflow: 'hidden',
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const HighlightCard = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(16, 185, 129, 0.3)',
  borderRadius: '24px',
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: theme.palette.primary.main,
  }
}));

const InfoItem = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  spacing: 3,
  alignItems: 'flex-start',
  padding: theme.spacing(2),
  background: theme.custom.surface.glassLight,
  borderRadius: '16px',
  border: `1px solid ${theme.custom.border.subtle}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.custom.surface.glassLight,
    border: `1px solid ${theme.custom.border.default}`,
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '16px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2.5),
  flexShrink: 0,
  color: theme.palette.primary.main,
}));

const DifferenceSection: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionContainer id="difference">
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4}>
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                Restaurant growth shouldn't be{' '}
                <GradientText component="span" variant="h2">
                  limited to the metros.
                </GradientText>
              </Typography>
              
              <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.6 }}>
                India's restaurant industry is growing far beyond the traditional metro markets. Yet much of the expertise, technology, and hands-on support is still concentrated in the bigger cities.
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Juno is changing that. Starting with Nagpur, Pune, and emerging restaurant markets across Maharashtra, we bring professional restaurant growth expertise closer to the businesses that need it.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              <InfoItem>
                <IconWrapper>
                  <MapOutlinedIcon sx={{ fontSize: 28 }} />
                </IconWrapper>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Beyond the Metros
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Focusing on growing restaurant hubs like Nagpur, Pune, and surrounding Maharashtra markets.
                  </Typography>
                </Box>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <RestaurantMenuOutlinedIcon sx={{ fontSize: 28 }} />
                </IconWrapper>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Food-Tech Knowledge
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Deep expertise in platforms, marketplace dynamics, digital menus, and online customer acquisition.
                  </Typography>
                </Box>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <TrendingUpOutlinedIcon sx={{ fontSize: 28 }} />
                </IconWrapper>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Hands-On Execution
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We combine digital strategy with local execution to help you build a stronger online business.
                  </Typography>
                </Box>
              </InfoItem>
            </Stack>
          </Grid>
        </Grid>

        <HighlightCard>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.5rem', sm: '2rem' },
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Built for the next generation of India's restaurant cities.
          </Typography>
        </HighlightCard>
      </Container>
    </SectionContainer>
  );
};

export default DifferenceSection;
