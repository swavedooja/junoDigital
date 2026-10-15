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
    radial-gradient(circle at 30% 70%, rgba(255, 184, 0, 0.08) 0%, transparent 50%),
    linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)
  `,
  overflow: 'hidden',
}));

// @ts-ignore
const TestimonialCard = styled(Card)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  height: '100%',
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    border: `1px solid ${theme.palette.primary.main}`,
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
    background: 'rgba(255, 184, 0, 0.1)',
    border: `1px solid ${theme.palette.primary.main}`,
    transform: 'scale(1.1)',
  }
}));

const testimonials: any[] = [];

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