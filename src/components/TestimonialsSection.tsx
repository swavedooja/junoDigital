import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Stack, 
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const SectionContainer = styled(Box)(() => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)
  `,
  overflow: 'hidden',
}));

// @ts-ignore
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

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  right: 20,
  fontSize: 60,
  color: theme.palette.primary.main,
  opacity: 0.3,
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

const TestimonialsSection: React.FC = () => {
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
    <SectionContainer id="testimonials">
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                animation: 'fadeInUp 1s ease-out',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Success Stories
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '700px',
                fontWeight: 400,
                animation: 'fadeInUp 1s ease-out 0.2s both',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Top companies, startups, and enterprises use our platform - here's what they have to say about us
            </Typography>
          </Stack>

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
                    animation: `fadeInUp 1s ease-out ${0.4 + index * 0.2}s both`,
                    '@keyframes fadeInUp': {
                      from: { opacity: 0, transform: 'translateY(30px)' },
                      to: { opacity: 1, transform: 'translateY(0)' },
                    },
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
                          fontSize: '1.1rem',
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
      </Container>
    </SectionContainer>
  );
};

export default TestimonialsSection;