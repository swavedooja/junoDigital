import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 50% 50%, rgba(255, 184, 0, 0.06) 0%, transparent 60%),
    ${theme.custom.gradient.sectionA}
  `,
  overflow: 'hidden',
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const ServiceCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  height: '100%',
  background: active
    ? (theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.06)' : 'rgba(217, 119, 6, 0.04)')
    : theme.custom.surface.cardAlt,
  backdropFilter: 'blur(20px)',
  border: active ? `2px solid ${theme.palette.primary.main}` : `1px solid ${theme.custom.border.default}`,
  borderRadius: '24px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.01)',
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0 25px 50px ${theme.custom.shadow.cardHover}`,
    background: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.06)' : 'rgba(217, 119, 6, 0.04)',
    '& .service-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      color: theme.palette.secondary.main,
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 72,
  height: 72,
  borderRadius: '20px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}18, ${theme.palette.secondary.main}18)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  transition: 'transform 0.3s ease',
  color: theme.palette.primary.main,
}));

const HighlightBox = styled(Box)(({ theme }) => ({
  background: theme.custom.surface.glassLight,
  border: `1px solid ${theme.custom.border.default}`,
  borderRadius: '16px',
  padding: theme.spacing(2),
  marginTop: theme.spacing(3),
  textAlign: 'center',
  '& .MuiTypography-root': {
    fontWeight: 600,
    fontSize: '0.95rem',
  }
}));

const servicesData = [
  {
    id: 1,
    icon: StorefrontOutlinedIcon,
    title: 'Get Online',
    subtitle: 'Restaurant Onboarding & Digital Setup',
    description: 'Getting your restaurant live on digital platforms shouldn\'t become another full-time job. We handle the process from start to finish.',
    items: [
      'Swiggy onboarding',
      'Zomato onboarding',
      'Dine and other platform onboarding',
      'Documentation support',
      'Restaurant listing setup',
      'Platform coordination',
      'Activation and follow-ups'
    ],
    highlight: 'You run the restaurant. We handle the platforms.'
  },
  {
    id: 2,
    icon: PhotoCameraOutlinedIcon,
    title: 'Look Better',
    subtitle: 'Food Photography & Menu Content',
    description: 'Great food deserves great presentation. Your food photographs are often the first thing a customer sees before deciding what to order.',
    items: [
      'Professional food photography',
      'Menu item photography',
      'Digital menu imagery',
      'Menu content',
      'Item descriptions',
      'Visual menu optimisation'
    ],
    highlight: 'Make your food look as good as it tastes.'
  },
  {
    id: 3,
    icon: ShoppingBagOutlinedIcon,
    title: 'Sell Better',
    subtitle: 'Menu & Marketplace Optimisation',
    description: 'Your digital menu is your storefront. We analyse pricing, assortment, positioning, and behaviour to improve discovery and conversion.',
    items: [
      'Menu engineering & structure',
      'Pricing optimisation',
      'Item assortment & descriptions',
      'Best-seller identification',
      'Combos and add-ons strategy',
      'Marketplace listing optimisation',
      'Visibility & conversion optimization'
    ],
    highlight: 'We don\'t just put your menu online. We make it work harder.'
  },
  {
    id: 4,
    icon: CampaignOutlinedIcon,
    title: 'Get Discovered',
    subtitle: 'Marketing & Campaigns',
    description: 'Being listed is not enough. We plan and execute campaigns around festivals, occasions, and marketplace opportunities to drive business.',
    items: [
      'Festival & occasion campaigns',
      'Promotional & discount strategy',
      'Marketplace visibility campaigns',
      'Digital marketing',
      'Customer acquisition campaigns',
      'Campaign performance tracking'
    ],
    highlight: 'The right offer. At the right time. To the right customer.'
  },
  {
    id: 5,
    icon: InsightsOutlinedIcon,
    title: 'Grow Smarter',
    subtitle: 'Restaurant Growth Consulting',
    description: 'Your restaurant generates data every day. We turn orders, revenue, ratings, and behaviour data into simple, actionable growth decisions.',
    items: [
      'Sales & revenue analysis',
      'Performance & campaign tracking',
      'Menu performance audits',
      'Competitive benchmarking',
      'Growth opportunity identification',
      'Ongoing optimization & consulting'
    ],
    highlight: 'Less reporting. More action.'
  }
];

const ServicesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <SectionContainer id="services">
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              Everything your restaurant needs to{' '}
              <GradientText component="span" variant="h2">
                grow online.
              </GradientText>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', fontWeight: 400, lineHeight: 1.6 }}
            >
              From getting your restaurant live on digital platforms to continuously improving its sales and visibility, we work across the entire digital restaurant journey.
            </Typography>
          </Stack>

          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.id}>
                  <ServiceCard
                    active={hoveredCard === service.id}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    elevation={0}
                  >
                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <IconWrapper className="service-icon">
                        <IconComponent sx={{ fontSize: 36 }} />
                      </IconWrapper>

                      <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
                        {service.title}
                      </Typography>

                      <Typography variant="subtitle1" color="primary.main" sx={{ mb: 2, fontWeight: 600 }}>
                        {service.subtitle}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, flexGrow: 1 }}>
                        {service.description}
                      </Typography>

                      <Stack spacing={1} sx={{ mb: 3 }}>
                        {service.items.map((item, idx) => (
                          <Stack direction="row" spacing={1} alignItems="flex-start" key={idx}>
                            <CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main', mt: 0.3, flexShrink: 0 }} />
                            <Typography variant="body2" color="text.primary">
                              {item}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>

                      <HighlightBox>
                        <Typography variant="body2" color="secondary.main">
                          {service.highlight}
                        </Typography>
                      </HighlightBox>
                    </CardContent>
                  </ServiceCard>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default ServicesSection;
