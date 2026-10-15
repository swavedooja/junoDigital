import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  Stack, 
  Grid,
  Button,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PercentIcon from '@mui/icons-material/Percent';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 70% 80%, rgba(255, 184, 0, 0.06) 0%, transparent 50%),
    ${theme.custom.gradient.sectionB}
  `,
  overflow: 'hidden',
}));

const CaseCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)' : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(243, 244, 246, 0.9) 100%)',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.3)' : '1px solid rgba(217, 119, 6, 0.25)',
  borderRadius: '28px',
  overflow: 'hidden',
  boxShadow: `0 20px 40px ${theme.custom.shadow.cardHover}`,
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: `0 30px 60px ${theme.palette.primary.main}20`,
  }
}));

const MetricBox = styled(Box)(({ theme }) => ({
  background: theme.custom.surface.glassLight,
  border: `1px solid ${theme.custom.border.subtle}`,
  borderRadius: '20px',
  padding: theme.spacing(3),
  textAlign: 'center',
  flex: 1,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.05)' : 'rgba(217, 119, 6, 0.04)',
    borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.25)' : 'rgba(217, 119, 6, 0.2)',
    transform: 'translateY(-4px)',
  }
}));

const CaseStudiesSection: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionContainer id="case-studies">
      <Container maxWidth="lg">
        <Stack spacing={10} alignItems="center">
          
          {/* Header */}
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              We measure growth in{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                orders
              </Box>
              , not presentations.
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '750px', fontWeight: 400, lineHeight: 1.6 }}
            >
              Real restaurant growth comes from execution. Here's what that can look like.
            </Typography>
          </Stack>

          {/* Featured Case Study */}
          <CaseCard sx={{ width: '100%' }}>
            <Grid container>
              <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 4, md: 6 } }}>
                <Stack spacing={3} justifyContent="center" height="100%">
                  <Typography variant="subtitle2" color="secondary.main" sx={{ fontWeight: 700, letterSpacing: 2 }}>
                    CASE STUDY 01
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700 }}>
                    Schezwan Express
                  </Typography>
                  <Typography variant="h4" color="primary.main" sx={{ fontWeight: 600 }}>
                    From 181 to 3,300+ monthly orders.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Schezwan Express was created to unlock a new customer segment for an existing restaurant brand. Juno worked across the brand's digital positioning, menu strategy, pricing, visibility, and marketplace execution to build a new growth engine.
                  </Typography>
                  <Box>
                    <Button 
                      variant="outlined" 
                      color="primary"
                      href="#contact"
                      sx={{ 
                        borderRadius: '30px', 
                        px: 4, 
                        py: 1.5, 
                        fontWeight: 600,
                        textTransform: 'none'
                      }}
                    >
                      Request Detailed Case Study
                    </Button>
                  </Box>
                </Stack>
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }} sx={{ background: theme.custom.surface.glassLight, borderLeft: { md: `1px solid ${theme.custom.border.subtle}` }, p: { xs: 4, md: 6 } }}>
                <Stack spacing={3} justifyContent="center" height="100%">
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    Key Growth Numbers
                  </Typography>
                  
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <MetricBox>
                      <TrendingUpIcon sx={{ color: 'primary.main', fontSize: 32, mb: 1 }} />
                      <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main' }}>
                        18x+
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        Order Growth
                      </Typography>
                    </MetricBox>

                    <MetricBox>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: 'secondary.main' }}>
                        3,300+
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        Monthly Orders
                      </Typography>
                    </MetricBox>
                  </Stack>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <MetricBox>
                      <PercentIcon sx={{ color: 'secondary.main', fontSize: 28, mb: 1 }} />
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>
                        20% - 30%
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        Lower Price Positioning
                      </Typography>
                    </MetricBox>

                    <MetricBox>
                      <StarOutlineIcon sx={{ color: 'primary.main', fontSize: 32, mb: 1 }} />
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>
                        Exclusive
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        Swiggy Presence
                      </Typography>
                    </MetricBox>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </CaseCard>

          {/* Testimonials / Client Stories Sub-section */}
          <Stack spacing={4} alignItems="center" sx={{ width: '100%', pt: 4 }}>
            <Box
              sx={{
                width: '100%',
                p: { xs: 4, md: 6 },
                borderRadius: '24px',
                background: (theme) => theme.custom.surface.glass,
                backdropFilter: 'blur(20px)',
                border: (theme) => `1px dashed ${theme.palette.primary.main}60`,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Stack spacing={2} alignItems="center" sx={{ maxWidth: 650, mx: 'auto' }}>
                <Box
                  sx={{
                    px: 2.5,
                    py: 0.75,
                    borderRadius: '50px',
                    background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.1)' : 'rgba(217, 119, 6, 0.08)',
                    border: (theme) => `1px solid ${theme.palette.primary.main}40`,
                    color: 'primary.main',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  Client Stories & Reviews
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Partner Stories Coming Soon
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  We are currently documenting verified case studies and testimonials from restaurant owners across Nagpur, Pune, and Maharashtra. Check back soon or reach out directly to learn about our recent partner engagements.
                </Typography>
                <Box sx={{ pt: 1 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="#contact"
                    sx={{
                      borderRadius: '50px',
                      px: 3.5,
                      py: 1.2,
                      fontWeight: 600,
                      textTransform: 'none',
                    }}
                  >
                    Speak with our team &rarr;
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Stack>

        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default CaseStudiesSection;
