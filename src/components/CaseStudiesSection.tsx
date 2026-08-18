import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Stack, 
  Grid,
  IconButton,
  Button,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PercentIcon from '@mui/icons-material/Percent';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const SectionContainer = styled(Box)(() => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
    linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%)
  `,
  overflow: 'hidden',
}));

const CaseCard = styled(Card)(() => ({
  background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)',
  border: '1px solid rgba(16, 185, 129, 0.3)',
  borderRadius: '28px',
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 30px 60px rgba(16, 185, 129, 0.1)',
  }
}));

const MetricBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '20px',
  padding: theme.spacing(3),
  textAlign: 'center',
  flex: 1,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(16, 185, 129, 0.04)',
    borderColor: 'rgba(16, 185, 129, 0.2)',
    transform: 'translateY(-4px)',
  }
}));

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  right: 20,
  fontSize: 60,
  color: theme.palette.primary.main,
  opacity: 0.2,
}));

const TestimonialCard = styled(Card)(() => ({
  background: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  height: '100%',
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
  }
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  background: 'rgba(17, 24, 39, 0.8)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: theme.palette.primary.main,
  width: 56,
  height: 56,
  '&:hover': {
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    transform: 'scale(1.1)',
  }
}));

const testimonials = [
  {
    name: 'Mohammed Bhol',
    role: 'Owner',
    company: 'House of Biryan',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrFZrsLx8KCJ1f5vgrYUFVuaddySK06J8RsNq1w1zRRVwqUkUpaRp-A70HMViGYFUVWBdgyanplLIev3z2Qv0xx3CulFWmRVso7TG6oJSqFl6DUlH1HSIfGMmo6ht8aZRDXzb0zzBM0tZZpFeKXPcoPXuDgM73Y-2TGNvMQOz3pIF4r8UdHfDsV1wSrP34qkOYSS8dMw4Jr_Sfn2RUgUOXzXPmQsW9r4X0iCBgbOvHHsb6dMXZj8S7lGBQC3qaYI_3bblzouBjtdI',
    testimonial: "Juno's strategies made our digital storefronts easier to navigate, optimizing metrics and positioning for growth on aggregator platforms, making them invaluable partners."
  },
  {
    name: 'Bipin Pande',
    role: 'Owner',
    company: "Jaffer Bhai's Delhi Darbar",
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBObMSAGJpEILfvTcH_cqGye4GAeEIpLIYaz5dbiUG7EvQv69yzPCe1plaeZzho86g25gceru48XApyLrw6vh3Llpz5t8EZGeU1j557nhGHTMGyzc7_6apeGrGXZX9eyXwsJ1ZdWpLQZAsRkxZzv7XpZu9E15UqLLBG1Ihdk1QCn3Z-1xA7c8ICxEoSoaiPCbSFVZDidnAlRknedTVbmO_13V0xy5e9akRyuFirq04qsisnPcq-29fv8KZwgnXjFFczF2t74GwIYrI',
    testimonial: "Juno's unmatched marketing expertise has helped us scale online, adapt to evolving platforms, and thrive in the competitive digital space, ensuring sustained success."
  },
  {
    name: 'Ambati Rayudu',
    role: 'Owner',
    company: 'Hunger Inc',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR-UDy1SFScbX9IALtjbbYAxwWm2M3Bok1BgXrahK9PJlHE-cNji7_BoRz15zpoTFJHZ2hHcpzQdOxqgESWpclAVE3OdXcv3r54xEBuDUUNCj4sLx1qIKhucEzRCTa_xgT01TSMCnM-pjhCaGKQFXqm_-1iK2aMJerDoIwuO6Fl3Nt5cvLWpkzU_Bl7nd91RnChbQywTxaLe50zYrSAi2j4XobM0HOikoxE4ecCxAimrWg5UOZK6edlDYRhiiAq_0N09NBDrfNPvY',
    testimonial: "Juno transformed our digital journey, enhancing user acquisition, loyalty, and analytics. Their insights make our online growth seamless and highly impactful."
  }
];

const CaseStudiesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = isMobile 
    ? [testimonials[currentIndex]]
    : testimonials;

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
              
              <Grid size={{ xs: 12, md: 6 }} sx={{ background: 'rgba(255,255,255,0.01)', borderLeft: { md: '1px solid rgba(255,255,255,0.05)' }, p: { xs: 4, md: 6 } }}>
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

          {/* Testimonials/Success Stories Sub-section */}
          <Stack spacing={6} alignItems="center" sx={{ width: '100%', pt: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              What restaurant co-founders say about us
            </Typography>

            <Box sx={{ position: 'relative', width: '100%' }}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                sx={{
                  transition: 'transform 0.5s ease-in-out',
                  ...(isMobile && {
                    transform: `translateX(-${currentIndex * 100}%)`,
                  })
                }}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`${testimonial.name}-${index}`}
                    sx={{
                      flex: 1,
                      minWidth: { xs: '100%', md: 'auto' },
                    }}
                  >
                    <CardContent sx={{ p: 4, position: 'relative' }}>
                      <QuoteIcon />
                      
                      <Stack spacing={3}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            sx={{
                              width: 60,
                              height: 60,
                              border: '2px solid',
                              borderColor: 'primary.main',
                            }}
                          />
                          <Stack>
                            <Typography variant="h6" fontWeight={600}>
                              {testimonial.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {testimonial.role}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="primary.main"
                              sx={{ fontWeight: 500 }}
                            >
                              {testimonial.company}
                            </Typography>
                          </Stack>
                        </Stack>

                        <Typography
                          variant="body1"
                          color="text.primary"
                          sx={{
                            fontSize: '1.05rem',
                            lineHeight: 1.7,
                            fontStyle: 'italic',
                          }}
                        >
                          "{testimonial.testimonial}"
                        </Typography>
                      </Stack>
                    </CardContent>
                  </TestimonialCard>
                ))}
              </Stack>

              {isMobile && (
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  sx={{ mt: 4 }}
                >
                  <NavigationButton onClick={handlePrevious}>
                    <ArrowBackIosIcon />
                  </NavigationButton>
                  <NavigationButton onClick={handleNext}>
                    <ArrowForwardIosIcon />
                  </NavigationButton>
                </Stack>
              )}
            </Box>
          </Stack>

        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default CaseStudiesSection;
