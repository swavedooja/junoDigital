import React from 'react';
import { Box, Container, Typography, Card, CardContent, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const SectionContainer = styled(Box)(() => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(17, 24, 39, 0.8) 100%)
  `,
  overflow: 'hidden',
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(17, 24, 39, 0.6)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    border: '1px solid rgba(16, 185, 129, 0.4)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
    '& .feature-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      color: theme.palette.primary.main,
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '20px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const FloatingShape = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
  backdropFilter: 'blur(10px)',
  animation: 'floatSlow 8s ease-in-out infinite',
  '@keyframes floatSlow': {
    '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
    '33%': { transform: 'translateY(-15px) translateX(10px)' },
    '66%': { transform: 'translateY(10px) translateX(-5px)' },
  },
}));

const features = [
  {
    icon: ManageSearchOutlinedIcon,
    title: 'SEO Optimization',
    description: 'Cutting-edge SEO techniques to boost your search engine rankings and drive organic traffic to your Company.',
  },
  {
    icon: Groups2OutlinedIcon,
    title: 'Social Media Marketing',
    description: 'Engaging social media campaigns to build your brand and connect with your audience across all platforms.',
  },
  {
    icon: MailOutlineOutlinedIcon,
    title: 'Email Marketing',
    description: 'Personalized email marketing strategies to nurture leads and retain customers with targeted campaigns.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <SectionContainer id="features">
      {/* Floating Shapes */}
      <FloatingShape 
        sx={{ 
          width: 120, 
          height: 120, 
          top: '10%', 
          right: '10%',
          animationDelay: '0s'
        }} 
      />
      <FloatingShape 
        sx={{ 
          width: 80, 
          height: 80, 
          bottom: '20%', 
          left: '5%',
          animationDelay: '3s'
        }} 
      />

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
              Why <GradientText component="span" variant="h2">Us?</GradientText>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '600px',
                fontWeight: 400,
                animation: 'fadeInUp 1s ease-out 0.2s both',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Comprehensive digital marketing solutions designed specifically for organizations
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            sx={{ width: '100%' }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <FeatureCard
                  key={feature.title}
                  sx={{
                    flex: 1,
                    animation: `fadeInUp 1s ease-out ${0.4 + index * 0.2}s both`,
                    '@keyframes fadeInUp': {
                      from: { opacity: 0, transform: 'translateY(30px)' },
                      to: { opacity: 1, transform: 'translateY(0)' },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <IconWrapper>
                      <IconComponent
                        className="feature-icon"
                        sx={{
                          fontSize: 40,
                          color: 'primary.main',
                        }}
                      />
                    </IconWrapper>
                    
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default FeaturesSection;