import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  background: `
    radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
    ${theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(17, 24, 39, 0.8) 100%)' : 'linear-gradient(135deg, #FAFAFA 0%, #F0F1F3 100%)'}
  `,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=srgb&fm=jpg&q=85")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: theme.custom.overlay.imageOpacity,
    zIndex: -1,
  }
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
  backdropFilter: 'blur(10px)',
  animation: 'float 6s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-20px) rotate(180deg)' },
  },
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const GlassButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  backdropFilter: 'blur(20px)',
  border: 'none',
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
  fontSize: '1.1rem',
  padding: '16px 40px',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    transform: 'translateY(-3px) scale(1.02)',
    boxShadow: `0 15px 35px ${theme.palette.primary.main}40`,
  }
}));

const OutlinedGlassButton = styled(Button)(({ theme }) => ({
  background: theme.custom.surface.glassLight,
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.custom.border.default}`,
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '16px 40px',
  borderRadius: '50px',
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: theme.custom.surface.glassLight,
    border: `1px solid ${theme.palette.primary.main}`,
    transform: 'translateY(-3px) scale(1.02)',
  }
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      {/* Floating Elements */}
      <FloatingElement 
        sx={{ 
          width: 80, 
          height: 80, 
          top: '20%', 
          left: '10%',
          animationDelay: '0s'
        }} 
      />
      <FloatingElement 
        sx={{ 
          width: 60, 
          height: 60, 
          top: '60%', 
          right: '15%',
          animationDelay: '2s'
        }} 
      />
      <FloatingElement 
        sx={{ 
          width: 100, 
          height: 100, 
          bottom: '20%', 
          left: '20%',
          animationDelay: '4s'
        }} 
      />

      <Container maxWidth="lg">
        <Stack 
          spacing={6} 
          alignItems="center" 
          textAlign="center"
          sx={{ py: 15 }}
        >
          <Typography
            variant="body2"
            sx={{
              background: 'rgba(16, 185, 129, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '70px',
              px: 3,
              py: 2,
              color: 'primary.main',
              fontWeight: 500,
              animation: 'fadeInUp 1s ease-out 0.2s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            ✨ Helping Restaurants Grow
          </Typography>

          <Typography
            variant="h1"
            sx={{
              maxWidth: '900px',
              animation: 'fadeInUp 1s ease-out 0.4s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            We help{' '}
            <GradientText component="span" variant="h1">
              restaurants grow
            </GradientText>{' '}
            in the digital age.
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              fontWeight: 400,
              lineHeight: 1.6,
              animation: 'fadeInUp 1s ease-out 0.6s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            From getting your restaurant online to making it sell better, we manage the digital side of your restaurant business.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              animation: 'fadeInUp 1s ease-out 0.7s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            Menu &nbsp;•&nbsp; Platforms &nbsp;•&nbsp; Food Photography &nbsp;•&nbsp; Marketing &nbsp;•&nbsp; Sales &nbsp;•&nbsp; Growth
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              animation: 'fadeInUp 1s ease-out 0.8s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <GlassButton
              size="large"
              href="#contact"
              fullWidth
            >
              Grow My Restaurant
            </GlassButton>
            <OutlinedGlassButton
              size="large"
              href="#services"
              fullWidth
            >
              Explore Our Services
            </OutlinedGlassButton>
          </Stack>
        </Stack>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;