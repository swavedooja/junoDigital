import React, { useState } from 'react';
import { Box, Container, Typography, Stack, Grid, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '110px 0 90px 0',
  background: `
    radial-gradient(circle at 75% 25%, rgba(255, 184, 0, 0.07) 0%, transparent 55%),
    radial-gradient(circle at 20% 70%, rgba(245, 158, 11, 0.05) 0%, transparent 50%),
    ${theme.custom.gradient.sectionB}
  `,
  overflow: 'hidden',
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const TabPill = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.2),
  padding: theme.spacing(1.4, 2.8),
  borderRadius: '50px',
  cursor: 'pointer',
  background: active
    ? 'rgba(255, 184, 0, 0.12)'
    : theme.palette.mode === 'dark'
    ? 'rgba(17, 24, 39, 0.6)'
    : 'rgba(255, 255, 255, 0.8)',
  border: active
    ? '1.8px solid #FFB800'
    : '1px solid rgba(255, 184, 0, 0.18)',
  color: active ? '#FFB800' : theme.palette.text.primary,
  fontWeight: active ? 700 : 500,
  fontSize: '0.92rem',
  transition: 'all 0.25s ease',
  boxShadow: active ? '0 0 20px rgba(255, 184, 0, 0.25)' : 'none',
  whiteSpace: 'nowrap',
  '&:hover': {
    borderColor: '#FFB800',
    background: 'rgba(255, 184, 0, 0.08)',
    transform: 'translateY(-2px)',
  },
}));

const ShowcaseCard = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.75)' : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.22)' : '1px solid rgba(217, 119, 6, 0.2)',
  borderRadius: '28px',
  padding: theme.spacing(4),
  boxShadow: '0 20px 48px rgba(0, 0, 0, 0.35)',
  overflow: 'hidden',
  position: 'relative',
}));

const SolutionItemCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 2.5),
  borderRadius: '16px',
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
  border: '1px solid rgba(255, 184, 0, 0.12)',
  transition: 'all 0.25s ease',
  cursor: 'pointer',
  '&:hover': {
    borderColor: '#FFB800',
    background: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.06)' : 'rgba(255, 251, 235, 0.9)',
    transform: 'translateX(4px)',
    '& .chevron-icon': {
      transform: 'translateX(4px)',
      color: '#FFB800',
    },
  },
}));

// Category Content Definitions
const categoryData = [
  {
    id: 'restaurants',
    title: 'Restaurants',
    icon: RestaurantRoundedIcon,
    audienceLabel: 'Restaurants',
    description: 'Casual dining, fine dining, and family-style restaurants.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=srgb&fm=jpg&q=80&w=900',
    needs: [
      {
        icon: TrendingUpRoundedIcon,
        title: 'Drive higher covers & repeat visits',
      },
      {
        icon: SettingsRoundedIcon,
        title: 'Run operations more efficiently across service, kitchen and staff',
      },
      {
        icon: PeopleAltRoundedIcon,
        title: 'Deliver a great, consistent guest experience',
      },
    ],
    solutions: [
      {
        icon: TrendingUpRoundedIcon,
        title: 'Grow Revenue',
        desc: 'Marketing, loyalty and guest engagement to drive more covers.',
      },
      {
        icon: RestaurantRoundedIcon,
        title: 'Streamline Operations',
        desc: 'POS, KDS and outlet operations tailored for restaurant workflows.',
      },
      {
        icon: StarRoundedIcon,
        title: 'Elevate Guest Experience',
        desc: 'Faster service, personalized engagement and higher reviews.',
      },
    ],
  },
  {
    id: 'qsrs',
    title: 'QSRs',
    icon: FastfoodRoundedIcon,
    audienceLabel: 'Quick Service Restaurants',
    description: 'Quick service operations built for speed, turnaround time, and high volume.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy&cs=srgb&fm=jpg&q=80&w=900',
    needs: [
      {
        icon: SpeedRoundedIcon,
        title: 'Reduce preparation and queue times',
      },
      {
        icon: TrendingUpRoundedIcon,
        title: 'Maximize order volume during peak meal hours',
      },
      {
        icon: DeliveryDiningRoundedIcon,
        title: 'Smooth synchronization with Swiggy & Zomato riders',
      },
    ],
    solutions: [
      {
        icon: SpeedRoundedIcon,
        title: 'High-Velocity Ordering',
        desc: 'Self-ordering QR menus, counter display integration, and instant token alerts.',
      },
      {
        icon: TrendingUpRoundedIcon,
        title: 'Combo & Upsell Automation',
        desc: 'Algorithm-backed add-ons that bump average order value by 18-24%.',
      },
      {
        icon: SettingsRoundedIcon,
        title: 'Kitchen Flow Optimization',
        desc: 'KDS timing controls that eliminate rider delays and platform penalties.',
      },
    ],
  },
  {
    id: 'cafes',
    title: 'Cafés',
    icon: LocalCafeRoundedIcon,
    audienceLabel: 'Cafés & Bakeries',
    description: 'Coffee shops, artisan bakeries, and neighbourhood hangout spots.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?crop=entropy&cs=srgb&fm=jpg&q=80&w=900',
    needs: [
      {
        icon: PeopleAltRoundedIcon,
        title: 'Build loyal repeat patrons & subscriptions',
      },
      {
        icon: StarRoundedIcon,
        title: 'Establish distinct Instagrammable visual branding',
      },
      {
        icon: TrendingUpRoundedIcon,
        title: 'Fill slow afternoon hours between rush windows',
      },
    ],
    solutions: [
      {
        icon: StarRoundedIcon,
        title: 'Visual Menu & Social Storytelling',
        desc: 'Artisan beverage imagery, seasonal specials, and viral social hooks.',
      },
      {
        icon: PeopleAltRoundedIcon,
        title: 'Digital Loyalty Programs',
        desc: 'Frictionless stamp cards and push offers that bring coffee drinkers back weekly.',
      },
      {
        icon: TrendingUpRoundedIcon,
        title: 'Off-Peak Demand Generation',
        desc: 'Special workday combo promotions on delivery platforms to boost mid-day revenue.',
      },
    ],
  },
  {
    id: 'cloudkitchens',
    title: 'Cloud Kitchens',
    icon: KitchenRoundedIcon,
    audienceLabel: 'Cloud & Virtual Kitchens',
    description: 'Delivery-first food concepts and multi-brand virtual storefronts.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=srgb&fm=jpg&q=80&w=900',
    needs: [
      {
        icon: DeliveryDiningRoundedIcon,
        title: 'Dominate 3-5 km delivery radius rankings',
      },
      {
        icon: SettingsRoundedIcon,
        title: 'Manage multiple virtual brands from one kitchen line',
      },
      {
        icon: TrendingUpRoundedIcon,
        title: 'Protect unit margins from steep ad deduction fees',
      },
    ],
    solutions: [
      {
        icon: DeliveryDiningRoundedIcon,
        title: 'Aggregator Algorithm Optimization',
        desc: 'Targeted bids, discount structures, and listing keywords that lift organic search rank.',
      },
      {
        icon: LayersRoundedIcon,
        title: 'Multi-Brand Menu Engineering',
        desc: 'Cross-utilizing prep ingredients across brands to cut wastage and maximize speed.',
      },
      {
        icon: TrendingUpRoundedIcon,
        title: 'ROI-Controlled Advertising',
        desc: 'Real-time campaign bidding calibrated to stop ad spend during zero-profit slots.',
      },
    ],
  },
  {
    id: 'multioutlet',
    title: 'Multi-Outlet Brands',
    icon: LayersRoundedIcon,
    audienceLabel: 'Multi-Outlet Chains',
    description: 'Local and regional chains scaling from 3 to 15+ locations.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=srgb&fm=jpg&q=80&w=900',
    needs: [
      {
        icon: StoreRoundedIcon,
        title: 'Standardize pricing, menus, and promotions across outlets',
      },
      {
        icon: SettingsRoundedIcon,
        title: 'Consolidated performance analytics across city zones',
      },
      {
        icon: PeopleAltRoundedIcon,
        title: 'Prevent branch-level operational quality discrepancies',
      },
    ],
    solutions: [
      {
        icon: StoreRoundedIcon,
        title: 'Centralized Platform Management',
        desc: 'One dashboard controlling menus, timings, and promotions across all city outlets.',
      },
      {
        icon: TrendingUpRoundedIcon,
        title: 'Cross-Store Benchmarking',
        desc: 'Comparative sales, ratings, and kitchen delay reports highlighting underperforming branches.',
      },
      {
        icon: LayersRoundedIcon,
        title: 'Standardized Expansion Playbook',
        desc: 'Rapid 7-day launch protocol for onboardings in new neighbourhoods.',
      },
    ],
  },
  {
    id: 'emerging',
    title: 'Emerging F&B Brands',
    icon: AutoAwesomeRoundedIcon,
    audienceLabel: 'Emerging Food Concepts',
    description: 'New food concepts launching into competitive urban and tier-2 markets.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=srgb&fm=jpg&q=80&w=900',
    needs: [
      {
        icon: AutoAwesomeRoundedIcon,
        title: 'Generate immediate brand discovery and first orders',
      },
      {
        icon: StarRoundedIcon,
        title: 'Build authentic customer trust and initial reviews',
      },
      {
        icon: TrendingUpRoundedIcon,
        title: 'Establish sustainable unit economics from day one',
      },
    ],
    solutions: [
      {
        icon: AutoAwesomeRoundedIcon,
        title: 'Turnkey Launch Acceleration',
        desc: 'End-to-end documentation, food photography, and verified platform launch within 10 days.',
      },
      {
        icon: StarRoundedIcon,
        title: 'First 500 Orders Playbook',
        desc: 'Hyperlocal influencer seeding and targeted promo campaigns that drive immediate trial.',
      },
      {
        icon: TrendingUpRoundedIcon,
        title: 'Pricing & Recipe Cost Audits',
        desc: 'Data-driven menu pricing balancing diner perceived value with healthy 60%+ gross margins.',
      },
    ],
  },
];

const WhoWeWorkWithSection: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const current = categoryData[activeTab];

  return (
    <SectionContainer id="who-we-work-with">
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 6, md: 7 }} alignItems="center">
          {/* Header */}
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.1rem', sm: '2.6rem', md: '3rem' },
                lineHeight: 1.2,
              }}
            >
              Find the right Juno solution for{' '}
              <GradientText component="span" variant="h2" sx={{ fontWeight: 800 }}>
                your F&B business.
              </GradientText>
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: '780px',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.6,
              }}
            >
              Tell us what you run, and see how we solve your specific challenges with
              industry-tested, results-driven solutions.
            </Typography>
          </Stack>

          {/* Horizontal Category Tabs Bar */}
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignSelf: 'stretch',
              gap: 1.5,
              py: 1,
              px: 0.5,
              flexWrap: { xs: 'nowrap', md: 'wrap' },
              justifyContent: { xs: 'flex-start', md: 'center' },
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {categoryData.map((cat, index) => {
              const IconCmp = cat.icon;
              const isActive = activeTab === index;
              return (
                <TabPill
                  key={cat.id}
                  active={isActive}
                  onClick={() => setActiveTab(index)}
                >
                  <IconCmp sx={{ fontSize: 20, color: isActive ? '#FFB800' : 'inherit' }} />
                  <span>{cat.title}</span>
                </TabPill>
              );
            })}
          </Box>

          {/* Interactive Showcase Panel */}
          <ShowcaseCard sx={{ width: '100%' }}>
            <Grid container spacing={{ xs: 4, lg: 5 }} alignItems="center">
              {/* Left Column: Audience Title, Desc, and Photo */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: { xs: 240, sm: 320, md: 420 },
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 184, 0, 0.25)',
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <Box
                    component="img"
                    src={current.image}
                    alt={current.title}
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(17,24,39,0.15) 10%, rgba(17,24,39,0.88) 100%)',
                    }}
                  />
                  <Stack spacing={1.5} sx={{ position: 'relative', zIndex: 1, p: { xs: 2.5, md: 3 }, height: '100%', justifyContent: 'flex-end' }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        alignSelf: 'flex-start',
                        px: 1.6,
                        py: 0.4,
                        borderRadius: '50px',
                        background: 'rgba(255, 184, 0, 0.18)',
                        border: '1px solid rgba(255, 184, 0, 0.4)',
                        color: '#FFB800',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                      }}
                    >
                      Selected audience
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.7rem', md: '2.2rem' }, color: '#fff' }}>
                      {current.audienceLabel}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.98rem', lineHeight: 1.55, maxWidth: 420 }}>
                      {current.description}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>

              {/* Right Column: Common Needs & Juno Solutions */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={3.5}>
                  {/* Common Needs Header */}
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                      <TrackChangesRoundedIcon sx={{ color: '#FFB800', fontSize: 22 }} />
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>
                        Common needs for {current.title}
                      </Typography>
                    </Stack>

                    <Grid container spacing={2}>
                      {current.needs.map((need, idx) => {
                        const NeedIcon = need.icon;
                        return (
                          <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                            <Box
                              sx={{
                                p: 2,
                                height: '100%',
                                borderRadius: '16px',
                                background: (thm) =>
                                  thm.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                                border: '1px solid rgba(255, 184, 0, 0.12)',
                              }}
                            >
                              <NeedIcon sx={{ color: '#FFB800', fontSize: 22, mb: 1 }} />
                              <Typography
                                variant="caption"
                                sx={{
                                  display: 'block',
                                  fontWeight: 500,
                                  color: 'text.secondary',
                                  lineHeight: 1.45,
                                  fontSize: '0.82rem',
                                }}
                              >
                                {need.title}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>

                  {/* Juno Solutions for You Header */}
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                      <BoltRoundedIcon sx={{ color: '#FFB800', fontSize: 22 }} />
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>
                        Juno solutions for you
                      </Typography>
                    </Stack>

                    <Stack spacing={1.5}>
                      {current.solutions.map((sol, idx) => {
                        const SolIcon = sol.icon;
                        return (
                          <SolutionItemCard key={idx}>
                            <Stack direction="row" spacing={2} alignItems="center">
                              <Box
                                sx={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: '12px',
                                  background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.2), rgba(245, 158, 11, 0.08))',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#FFB800',
                                  flexShrink: 0,
                                }}
                              >
                                <SolIcon sx={{ fontSize: 22 }} />
                              </Box>
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.3 }}>
                                  {sol.title}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem', lineHeight: 1.4 }}>
                                  {sol.desc}
                                </Typography>
                              </Box>
                            </Stack>

                            <ChevronRightRoundedIcon
                              className="chevron-icon"
                              sx={{ color: 'text.secondary', fontSize: 22, transition: 'all 0.2s ease' }}
                            />
                          </SolutionItemCard>
                        );
                      })}
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </ShowcaseCard>

          {/* Bottom CTAs */}
          <Stack
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            spacing={2}
            alignItems={{ xs: 'stretch', md: 'center' }}
            justifyContent="center"
            sx={{ pt: 1 }}
          >
            <Button
              variant="contained"
              href="#contact"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                color: '#000',
                fontWeight: 800,
                px: 4,
                py: 1.6,
                borderRadius: '50px',
                fontSize: '0.98rem',
                textTransform: 'none',
                boxShadow: '0 8px 25px rgba(255, 184, 0, 0.35)',
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                  boxShadow: '0 12px 30px rgba(255, 184, 0, 0.5)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get a personalized plan for {current.title}
            </Button>

            <Button
              variant="outlined"
              href="#case-studies"
              startIcon={<PlayArrowRoundedIcon sx={{ color: '#FFB800' }} />}
              sx={{
                borderRadius: '50px',
                px: 3.5,
                py: 1.6,
                fontSize: '0.95rem',
                fontWeight: 600,
                textTransform: 'none',
                borderColor: 'rgba(255, 184, 0, 0.35)',
                color: 'text.primary',
                background: (thm) =>
                  thm.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)',
                '&:hover': {
                  borderColor: '#FFB800',
                  background: 'rgba(255, 184, 0, 0.08)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              See it in action (2 min)
            </Button>
          </Stack>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default WhoWeWorkWithSection;
