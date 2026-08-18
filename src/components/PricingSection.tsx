import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Stack, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SectionContainer = styled(Box)(() => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
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

const PricingCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'featured',
})<{ featured?: boolean }>(({ featured }) => ({
  height: '100%',
  background: featured 
    ? 'rgba(16, 185, 129, 0.1)' 
    : 'rgba(17, 24, 39, 0.6)',
  backdropFilter: 'blur(20px)',
  border: featured 
    ? '2px solid rgba(16, 185, 129, 0.5)' 
    : '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: featured ? 'scale(1.05)' : 'scale(1)',
  '&:hover': {
    transform: featured ? 'scale(1.08) translateY(-8px)' : 'scale(1.03) translateY(-8px)',
    border: '2px solid rgba(16, 185, 129, 0.5)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
  }
}));

// @ts-ignore
const PriceText = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 700,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const CTAButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'featured' && prop !== 'component',
})<{ featured?: boolean, component?: React.ElementType }>(({ theme, featured }) => ({
  background: featured 
    ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
    : 'rgba(16, 185, 129, 0.1)',
  color: featured ? theme.palette.primary.contrastText : theme.palette.primary.main,
  border: featured ? 'none' : `1px solid ${theme.palette.primary.main}`,
  fontWeight: 600,
  padding: '12px 32px',
  borderRadius: '50px',
  width: '100%',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    color: theme.palette.primary.contrastText,
    transform: 'translateY(-2px)',
    boxShadow: `0 10px 25px ${theme.palette.primary.main}40`,
  }
}));

const PopularChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: -12,
  left: '50%',
  transform: 'translateX(-50%)',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: '0.875rem',
  '& .MuiChip-label': {
    padding: '8px 16px',
  }
}));

const pricingPlans = [
  {
    name: 'Basic',
    price: 299,
    description: 'Perfect for small companies getting started',
    features: [
      'SEO Audit & Optimization',
      'Social Media Setup',
      'Monthly Performance Reports',
      'Basic Email Support',
      'Google My Business Setup'
    ],
    featured: false
  },
  {
    name: 'Pro',
    price: 599,
    description: 'Ideal for growing companies',
    features: [
      'Everything in Basic',
      'Content Creation & Management',
      'Email Marketing Campaigns',
      'Social Media Advertising',
      'Weekly Performance Reports',
      'Priority Support'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 999,
    description: 'For established organizations',
    features: [
      'Everything in Pro',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Custom Analytics Dashboard',
      'Multi-location Management',
      'Advanced Automation'
    ],
    featured: false
  }
];

const PricingSection: React.FC = () => {
  return (
    <SectionContainer id="pricing">
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
              Our <GradientText component="span" variant="h2">Pricing</GradientText>
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
              Choose the perfect plan for your company's digital growth
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={4}
            sx={{ width: '100%', alignItems: 'stretch' }}
          >
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                featured={plan.featured}
                sx={{
                  flex: 1,
                  animation: `fadeInUp 1s ease-out ${0.4 + index * 0.2}s both`,
                  '@keyframes fadeInUp': {
                    from: { opacity: 0, transform: 'translateY(30px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                {plan.featured && (
                  <PopularChip label="Most Popular" />
                )}
                
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Stack spacing={3}>
                    <Stack spacing={1}>
                      <Typography variant="h4" fontWeight={600}>
                        {plan.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {plan.description}
                      </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={1}>
                      <PriceText>₹{plan.price}</PriceText>
                      <Typography variant="h6" color="text.secondary">
                        /month
                      </Typography>
                    </Stack>

                    <List sx={{ py: 0 }}>
                      {plan.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon 
                              sx={{ 
                                color: 'primary.main',
                                fontSize: 20
                              }} 
                            />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.primary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <CTAButton
                      featured={plan.featured}
                      component="a"
                      href="#contact"
                    >
                      Choose {plan.name}
                    </CTAButton>
                  </Stack>
                </CardContent>
              </PricingCard>
            ))}
          </Stack>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default PricingSection;