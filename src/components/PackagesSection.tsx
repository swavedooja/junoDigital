import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';

// ─── Styled Components ───────────────────────────────────────────────

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 75% 15%, rgba(255, 184, 0, 0.08) 0%, transparent 45%),
    radial-gradient(circle at 20% 85%, rgba(245, 158, 11, 0.08) 0%, transparent 45%),
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

const PackageCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'featured' && prop !== 'badgeColor',
})<{ featured?: boolean; badgeColor?: 'green' | 'amber' }>(({ theme, featured }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: featured
    ? (theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.05)' : 'rgba(217, 119, 6, 0.03)')
    : theme.custom.surface.card,
  backdropFilter: 'blur(20px)',
  border: featured
    ? `2px solid ${theme.palette.primary.main}`
    : `1px solid ${theme.custom.border.default}`,
  borderRadius: '28px',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: featured ? theme.custom.shadow.elevated : theme.custom.shadow.card,
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: theme.palette.primary.main,
    boxShadow: theme.custom.shadow.cardHover,
  },
}));

const PriceBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '20px',
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
  border: `1px solid ${theme.custom.border.subtle}`,
  margin: theme.spacing(2.5, 0),
}));

const ServiceItemRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5, 2),
  borderRadius: '12px',
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
  border: `1px solid ${theme.custom.border.subtle}`,
  transition: 'all 0.2s ease',
  '&:hover': {
    background: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.06)' : 'rgba(217, 119, 6, 0.05)',
    borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.3)' : 'rgba(217, 119, 6, 0.2)',
  },
}));

const ComparisonTablePaper = styled(Paper)(({ theme }) => ({
  borderRadius: '24px',
  overflow: 'hidden',
  background: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.7)' : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.custom.border.default}`,
  boxShadow: theme.custom.shadow.elevated,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderColor: theme.custom.border.subtle,
  padding: theme.spacing(2, 2.5),
  fontSize: '0.95rem',
}));

const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  borderColor: theme.custom.border.default,
  padding: theme.spacing(2.5, 2.5),
  fontWeight: 700,
  fontSize: '1rem',
  background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.02)',
}));

const SimpleChoiceCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  padding: theme.spacing(3),
  borderRadius: '20px',
  background: active
    ? (theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.1)' : 'rgba(217, 119, 6, 0.08)')
    : theme.custom.surface.glassLight,
  border: active
    ? `2px solid ${theme.palette.primary.main}`
    : `1px solid ${theme.custom.border.default}`,
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-4px)',
  },
}));

// ─── Data Definitions ────────────────────────────────────────────────

const oneTimeServices = [
  { name: 'Food Photography', details: 'Professional shoot • Up to 50 food images', price: '₹8,000', icon: CameraAltOutlinedIcon },
  { name: 'Food Video', details: 'Short-form food/video shoot', price: '₹5,000', icon: VideocamOutlinedIcon },
  { name: 'Menu Content', details: 'Item descriptions • Serving info', price: '₹4,000', icon: MenuBookOutlinedIcon },
  { name: 'Swiggy & Zomato Onboarding', details: 'Docs, listing coordination & activation', price: '₹3,000 / outlet', icon: StorefrontOutlinedIcon },
  { name: 'Google Business Listing', details: 'Creation & digital setup', price: '₹3,000 / outlet', icon: PublicOutlinedIcon },
  { name: 'Social Media Setup', details: 'Page creation & branding', price: '₹2,000 / outlet', icon: ShareOutlinedIcon },
  { name: 'Menu Makeover', details: 'Menu re-engineering with photos', price: '₹4,000 / outlet', icon: AutoFixHighOutlinedIcon },
  { name: 'FSSAI Assistance', details: 'Available for Nagpur region', price: '₹2,000', icon: VerifiedUserOutlinedIcon },
  { name: 'Account Handling', details: 'Platform account management', price: '₹7,000 / outlet', icon: ManageAccountsOutlinedIcon },
  { name: 'Menu Updates', details: 'Digital menu additions & revisions', price: '₹2,000 / outlet', icon: UpdateOutlinedIcon },
];

const comparisonData = [
  { feature: 'Model', getOnline: 'One-time', getGrowing: 'Monthly', getAhead: 'Monthly', isText: true },
  { feature: 'Price', getOnline: 'From ₹4,999', getGrowing: '₹14,999', getAhead: '₹24,999', isPrice: true },
  { feature: 'Platform onboarding', getOnline: true, getGrowing: false, getAhead: false },
  { feature: 'Food photography', getOnline: true, getGrowing: 'Optional', getAhead: 'Optional' },
  { feature: 'Menu setup', getOnline: true, getGrowing: true, getAhead: true },
  { feature: 'Menu optimisation', getOnline: true, getGrowing: true, getAhead: 'Advanced' },
  { feature: 'Menu descriptions', getOnline: true, getGrowing: true, getAhead: true },
  { feature: 'Marketplace growth', getOnline: false, getGrowing: true, getAhead: true },
  { feature: 'Promo strategy', getOnline: false, getGrowing: true, getAhead: 'Advanced' },
  { feature: 'Festival campaigns', getOnline: false, getGrowing: false, getAhead: true },
  { feature: 'Weekday campaigns', getOnline: false, getGrowing: false, getAhead: true },
  { feature: 'Ads strategy', getOnline: false, getGrowing: false, getAhead: true },
  { feature: 'Sales tracking', getOnline: false, getGrowing: true, getAhead: true },
  { feature: 'Performance analytics', getOnline: false, getGrowing: true, getAhead: 'Advanced' },
  { feature: 'AOV optimisation', getOnline: false, getGrowing: false, getAhead: true },
  { feature: 'P&L management', getOnline: false, getGrowing: false, getAhead: true },
  { feature: 'Profitability optimisation', getOnline: false, getGrowing: false, getAhead: true },
  { feature: 'Untapped market opportunities', getOnline: false, getGrowing: false, getAhead: true },
  { feature: 'Influencer planning', getOnline: false, getGrowing: false, getAhead: true },
];

// ─── Component ───────────────────────────────────────────────────────

const PackagesSection: React.FC = () => {
  const theme = useTheme();
  const [selectedPlanTab, setSelectedPlanTab] = useState<number>(1); // Default to Get Growing

  const renderCellValue = (val: string | boolean) => {
    if (val === true) {
      return <CheckIcon sx={{ color: 'primary.main', fontSize: 22 }} />;
    }
    if (val === false) {
      return <RemoveIcon sx={{ color: 'text.secondary', opacity: 0.5, fontSize: 18 }} />;
    }
    if (val === 'Optional') {
      return (
        <Chip
          label="Optional"
          size="small"
          sx={{
            fontWeight: 500,
            fontSize: '0.8rem',
            background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
            color: 'text.secondary',
          }}
        />
      );
    }
    if (val === 'Advanced') {
      return (
        <Chip
          label="Advanced"
          size="small"
          sx={{
            fontWeight: 600,
            fontSize: '0.8rem',
            background: 'rgba(245, 158, 11, 0.15)',
            color: 'secondary.main',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
        />
      );
    }
    return (
      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
        {val}
      </Typography>
    );
  };

  return (
    <SectionContainer id="packages">
      <Container maxWidth="lg">
        <Stack spacing={10} alignItems="center">
          
          {/* Header & Promise */}
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Chip
              label="RESTAURANT GROWTH PACKAGES"
              sx={{
                fontWeight: 700,
                letterSpacing: 1.5,
                fontSize: '0.85rem',
                py: 2,
                px: 1,
                background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.1)' : 'rgba(217, 119, 6, 0.08)',
                color: 'primary.main',
                border: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.3)' : '1px solid rgba(217, 119, 6, 0.25)',
              }}
            />
            
            <Typography variant="h2" sx={{ fontWeight: 700, maxWidth: 900 }}>
              You focus on the food.{' '}
              <GradientText component="span" variant="h2">
                We focus on the digital growth.
              </GradientText>
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 850, fontWeight: 400, lineHeight: 1.6 }}
            >
              From getting your restaurant online to improving menus, driving orders and managing profitability, Juno works as an extension of your team.
            </Typography>
          </Stack>

          {/* The Simple Way to Choose */}
          <Box sx={{ width: '100%' }}>
            <Typography
              variant="subtitle1"
              color="primary.main"
              sx={{ fontWeight: 700, letterSpacing: 2, textAlign: 'center', mb: 3 }}
            >
              THE SIMPLE WAY TO CHOOSE
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <SimpleChoiceCard
                  active={selectedPlanTab === 0}
                  onClick={() => setSelectedPlanTab(0)}
                >
                  <Stack spacing={1.5}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                        STAGE 01
                      </Typography>
                      <Chip label="Build Foundation" size="small" variant="outlined" color="primary" />
                    </Stack>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      GET ONLINE
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
                      “I need help getting my restaurant ready for the digital world.”
                    </Typography>
                  </Stack>
                </SimpleChoiceCard>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <SimpleChoiceCard
                  active={selectedPlanTab === 1}
                  onClick={() => setSelectedPlanTab(1)}
                >
                  <Stack spacing={1.5}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                        STAGE 02
                      </Typography>
                      <Chip label="Improve Engine" size="small" color="primary" />
                    </Stack>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      GET GROWING
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
                      “I'm already online. I want more orders.”
                    </Typography>
                  </Stack>
                </SimpleChoiceCard>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <SimpleChoiceCard
                  active={selectedPlanTab === 2}
                  onClick={() => setSelectedPlanTab(2)}
                >
                  <Stack spacing={1.5}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                        STAGE 03
                      </Typography>
                      <Chip label="Optimise Business" size="small" color="secondary" />
                    </Stack>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      GET AHEAD
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
                      “I'm serious about growing my revenue and profitability.”
                    </Typography>
                  </Stack>
                </SimpleChoiceCard>
              </Grid>
            </Grid>
          </Box>

          {/* 3 Detailed Package Cards */}
          <Grid container spacing={4} alignItems="stretch">
            
            {/* 01 — GET ONLINE */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <PackageCard>
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: 1.5 }}>
                      01 — ONE-TIME SETUP
                    </Typography>
                    <Chip label="Foundation" size="small" sx={{ background: 'rgba(255,255,255,0.06)', fontWeight: 600 }} />
                  </Stack>

                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    GET ONLINE
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600, mb: 1.5 }}>
                    One-time digital setup for restaurants
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                    For restaurants that need to build or strengthen their digital foundation without chasing platforms or multiple vendors.
                  </Typography>

                  <PriceBox>
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
                      Modular Pricing
                    </Typography>
                    <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mt: 0.5 }}>
                      <Typography variant="h3" sx={{ fontWeight: 800 }}>
                        From ₹4,999
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        / service
                      </Typography>
                    </Stack>
                  </PriceBox>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <RestaurantMenuIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                      Available Services:
                    </Typography>

                    <Stack spacing={1} sx={{ maxHeight: 380, overflowY: 'auto', pr: 0.5 }}>
                      {oneTimeServices.map((service, idx) => {
                        const IconCmp = service.icon;
                        return (
                          <ServiceItemRow key={idx}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                              <IconCmp sx={{ fontSize: 18, color: 'primary.main' }} />
                              <Box>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                  {service.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {service.details}
                                </Typography>
                              </Box>
                            </Box>
                            <Chip
                              label={service.price}
                              size="small"
                              sx={{
                                fontWeight: 700,
                                fontSize: '0.75rem',
                                background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.1)' : 'rgba(217, 119, 6, 0.08)',
                                color: 'primary.main',
                                border: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.25)' : '1px solid rgba(217, 119, 6, 0.2)',
                              }}
                            />
                          </ServiceItemRow>
                        );
                      })}
                    </Stack>
                  </Box>

                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Box sx={{ p: 2, borderRadius: '14px', background: theme.custom.surface.glassLight, mb: 3, border: `1px solid ${theme.custom.border.subtle}` }}>
                      <Typography variant="caption" color="primary.main" sx={{ fontWeight: 700, display: 'block', mb: 0.5 }}>
                        BEST FOR & OUTCOME
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                        • New restaurants & outlets going online
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Outcome: Get online. Look professional. Be ready to sell.
                      </Typography>
                    </Box>

                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      href="#contact"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ py: 1.6, borderRadius: '50px', fontWeight: 600 }}
                    >
                      Get Started with Setup
                    </Button>
                  </Box>
                </CardContent>
              </PackageCard>
            </Grid>

            {/* 02 — GET GROWING */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <PackageCard featured badgeColor="green">
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 700, letterSpacing: 1.5 }}>
                      02 — MONTHLY GROWTH PLAN
                    </Typography>
                    <Chip
                      icon={<StarIcon sx={{ fontSize: '14px !important', color: '#000' }} />}
                      label="MOST POPULAR"
                      size="small"
                      sx={{
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Stack>

                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    GET GROWING
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600, mb: 1.5 }}>
                    Restaurant Growth Plan
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                    For restaurants already online that want to increase visibility, boost menu conversion and drive consistent monthly order growth.
                  </Typography>

                  <PriceBox sx={{ borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.35)' : 'rgba(217, 119, 6, 0.3)', background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.06)' : 'rgba(217, 119, 6, 0.04)' }}>
                    <Typography variant="caption" color="primary.main" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
                      Monthly Retainer
                    </Typography>
                    <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mt: 0.5 }}>
                      <Typography variant="h2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                        ₹14,999
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        / month
                      </Typography>
                    </Stack>
                  </PriceBox>

                  <Stack spacing={2} sx={{ mb: 3 }}>
                    <Box>
                      <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TrendingUpIcon sx={{ fontSize: 18 }} />
                        MENU GROWTH
                      </Typography>
                      <Stack spacing={0.8}>
                        {['Complete Menu Re-engineering', '100% Description & Serving Coverage', 'Menu Cleanup & Clutter Removal', 'New High-Demand Dish Opportunities'].map((item, idx) => (
                          <Stack direction="row" spacing={1} alignItems="flex-start" key={idx}>
                            <CheckCircleIcon sx={{ fontSize: 16, color: 'primary.main', mt: 0.3 }} />
                            <Typography variant="body2">{item}</Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>

                    <Box>
                      <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>
                        PROMOTION & SALES GROWTH
                      </Typography>
                      <Stack spacing={0.8}>
                        {['Smarter Promo & Discount Planning', 'Packaging & Unboxing Experience Planning', 'Add-on & Cart Value Maximization'].map((item, idx) => (
                          <Stack direction="row" spacing={1} alignItems="flex-start" key={idx}>
                            <CheckCircleIcon sx={{ fontSize: 16, color: 'primary.main', mt: 0.3 }} />
                            <Typography variant="body2">{item}</Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>

                    <Box>
                      <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>
                        PERFORMANCE TRACKING
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.5 }}>
                        Continuous tracking of: Menu conversion • Menu-to-order rate • Visibility • Discounts • Rejections • Ratings • Customer reviews • Weekly reports
                      </Typography>
                    </Box>
                  </Stack>

                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Box sx={{ p: 2, borderRadius: '14px', background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.08)' : 'rgba(217, 119, 6, 0.06)', mb: 3, border: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.25)' : '1px solid rgba(217, 119, 6, 0.2)' }}>
                      <Typography variant="caption" color="primary.main" sx={{ fontWeight: 700, display: 'block', mb: 0.5 }}>
                        WHAT WE'RE WORKING TOWARDS
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Outcome: More visibility. More orders. Better-performing menus.
                      </Typography>
                    </Box>

                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      href="#contact"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ py: 1.6, borderRadius: '50px', fontWeight: 700, color: (theme) => theme.palette.mode === 'dark' ? '#000000' : '#FFFFFF' }}
                    >
                      Choose Get Growing
                    </Button>
                  </Box>
                </CardContent>
              </PackageCard>
            </Grid>

            {/* 03 — GET AHEAD */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <PackageCard badgeColor="amber">
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="subtitle2" color="secondary.main" sx={{ fontWeight: 700, letterSpacing: 1.5 }}>
                      03 — EXTENDED TEAM
                    </Typography>
                    <Chip
                      label="GROWTH + P&L"
                      size="small"
                      sx={{
                        background: 'rgba(245, 158, 11, 0.15)',
                        color: 'secondary.main',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Stack>

                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    GET AHEAD
                  </Typography>
                  <Typography variant="subtitle1" color="secondary.main" sx={{ fontWeight: 600, mb: 1.5 }}>
                    Restaurant Growth + P&L Plan
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                    For restaurants that want Juno as their complete digital growth team — with deep revenue, demand acquisition, and profitability management.
                  </Typography>

                  <PriceBox sx={{ borderColor: 'rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.05)' }}>
                    <Typography variant="caption" color="secondary.main" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
                      Growth + P&L Retainer
                    </Typography>
                    <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mt: 0.5 }}>
                      <Typography variant="h2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                        ₹24,999
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        / month
                      </Typography>
                    </Stack>
                  </PriceBox>

                  <Stack spacing={2} sx={{ mb: 3 }}>
                    <Box>
                      <Typography variant="subtitle2" color="secondary.main" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <RocketLaunchIcon sx={{ fontSize: 18 }} />
                        EVERYTHING IN GET GROWING, PLUS:
                      </Typography>
                      <Stack spacing={0.8}>
                        {[
                          'Deep Menu Restructuring & Image Coverage Analysis',
                          'Festival, Occasion & Weekday Demand Campaigns',
                          'Ads Investment Strategy & Mealtime Expansion',
                          'Untapped Demand Pools (Hospitals, Corporates, Railways)',
                          'AOV & Large Order Opportunity Strategy',
                          'Comprehensive P&L Structure & Discount Efficiency',
                          'Influencer Marketing Acquisition Planning',
                        ].map((item, idx) => (
                          <Stack direction="row" spacing={1} alignItems="flex-start" key={idx}>
                            <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', mt: 0.3 }} />
                            <Typography variant="body2">{item}</Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>

                    <Box>
                      <Typography variant="subtitle2" color="secondary.main" sx={{ fontWeight: 700, mb: 0.5 }}>
                        PERFORMANCE INTELLIGENCE
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.5 }}>
                        Full tracking of Sales, Orders, Menu conversion, Visibility, Ratings, Reviews, Rejections, Discounts, Ads, AOV, and P&L Margin metrics.
                      </Typography>
                    </Box>
                  </Stack>

                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Box sx={{ p: 2, borderRadius: '14px', background: 'rgba(245, 158, 11, 0.08)', mb: 3, border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                      <Typography variant="caption" color="secondary.main" sx={{ fontWeight: 700, display: 'block', mb: 0.5 }}>
                        ULTIMATE OUTCOME
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Outcome: Grow revenue. Improve efficiency. Build healthier margins.
                      </Typography>
                    </Box>

                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      href="#contact"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ py: 1.6, borderRadius: '50px', fontWeight: 700, color: '#000' }}
                    >
                      Partner with Juno (Get Ahead)
                    </Button>
                  </Box>
                </CardContent>
              </PackageCard>
            </Grid>
          </Grid>

          {/* AT A GLANCE — Feature Comparison Table (Exact Match to Reference Image) */}
          <Box sx={{ width: '100%', mt: 6 }}>
            <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 4 }}>
              <Typography variant="h3" sx={{ fontWeight: 800 }}>
                AT A GLANCE
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Side-by-side comparison of deliverables across all Juno restaurant packages.
              </Typography>
            </Stack>

            <ComparisonTablePaper elevation={0}>
              <TableContainer sx={{ maxHeight: 800 }}>
                <Table stickyHeader aria-label="package comparison table">
                  <TableHead>
                    <TableRow>
                      <StyledHeaderCell sx={{ width: '37%' }}>
                        Deliverables & Features
                      </StyledHeaderCell>
                      <StyledHeaderCell align="center" sx={{ width: '21%' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>
                          GET ONLINE
                        </Typography>
                      </StyledHeaderCell>
                      <StyledHeaderCell align="center" sx={{ width: '21%', background: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.08)' : 'rgba(217, 119, 6, 0.06)' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'primary.main' }}>
                          GET GROWING
                        </Typography>
                      </StyledHeaderCell>
                      <StyledHeaderCell align="center" sx={{ width: '21%' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'secondary.main' }}>
                          GET AHEAD
                        </Typography>
                      </StyledHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comparisonData.map((row, index) => {
                      const isHeaderRow = index < 2;
                      return (
                        <TableRow
                          key={row.feature}
                          sx={{
                            background: isHeaderRow
                              ? (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)')
                              : 'transparent',
                            '&:hover': {
                              background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                            },
                          }}
                        >
                          <StyledTableCell component="th" scope="row" sx={{ fontWeight: isHeaderRow ? 700 : 500 }}>
                            {row.feature}
                          </StyledTableCell>
                          
                          <StyledTableCell align="center">
                            {renderCellValue(row.getOnline)}
                          </StyledTableCell>
                          
                          <StyledTableCell
                            align="center"
                            sx={{
                              background: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.03)' : 'rgba(217, 119, 6, 0.02)',
                            }}
                          >
                            {renderCellValue(row.getGrowing)}
                          </StyledTableCell>
                          
                          <StyledTableCell align="center">
                            {renderCellValue(row.getAhead)}
                          </StyledTableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </ComparisonTablePaper>
          </Box>

          {/* Important Engagement Information — Reimagined */}
          <Box
            sx={{
              width: '100%',
              mt: 4,
              pt: { xs: 4, md: 6 },
              position: 'relative',
            }}
          >
            {/* Header Badge & Title */}
            <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.5,
                  py: 0.75,
                  borderRadius: '50px',
                  background: (theme) =>
                    theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.1)' : 'rgba(217, 119, 6, 0.08)',
                  border: (theme) => `1px solid ${theme.palette.primary.main}40`,
                  color: 'primary.main',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: 1.2,
                  textTransform: 'uppercase',
                }}
              >
                <InfoOutlinedIcon sx={{ fontSize: 17 }} />
                <span>Transparent Partnership Terms</span>
              </Box>

              <Typography variant="h3" sx={{ fontWeight: 800 }}>
                Important{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Engagement
                </Box>{' '}
                Information
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, lineHeight: 1.7, fontSize: '1.05rem' }}>
                Clear, upfront principles behind every Juno restaurant engagement — built for measurable growth with zero hidden surprises.
              </Typography>
            </Stack>

            {/* 3 Interactive Cards */}
            <Grid container spacing={3.5} alignItems="stretch">
              {/* Card 1: Platform Focus */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 3.5, md: 4.5 },
                    borderRadius: '26px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, rgba(255, 184, 0, 0.07) 0%, rgba(17, 24, 39, 0.7) 100%)'
                        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(254, 243, 199, 0.4) 100%)',
                    border: (theme) =>
                      `1.5px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.25)' : 'rgba(217, 119, 6, 0.2)'}`,
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 12px 36px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                        : '0 10px 30px rgba(217, 119, 6, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'primary.main',
                      boxShadow: (theme) => `0 20px 45px ${theme.palette.primary.main}30`,
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: (theme) =>
                            `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                          color: '#000',
                          boxShadow: (theme) => `0 8px 20px ${theme.palette.primary.main}45`,
                        }}
                      >
                        <StorefrontOutlinedIcon sx={{ fontSize: 30 }} />
                      </Box>
                      <Chip
                        label="Swiggy & Zomato"
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          background: (theme) =>
                            theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.15)' : 'rgba(217, 119, 6, 0.1)',
                          color: 'primary.main',
                          border: (theme) => `1px solid ${theme.palette.primary.main}40`,
                        }}
                      />
                    </Stack>

                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5, letterSpacing: -0.3 }}>
                      Platform-Engineered Focus
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                      All monthly plans are specifically custom-engineered around{' '}
                      <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        Swiggy &amp; Zomato marketplace algorithms
                      </Box>{' '}
                      — optimizing rank signals, dish click-through rate, discounting efficiency, and repeat ordering patterns.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mt: 3.5,
                      pt: 2.5,
                      borderTop: (theme) => `1px solid ${theme.custom.border.subtle}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.2,
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                      Deep food-tech algorithmic optimization
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Card 2: Multi-Outlet Scaling */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 3.5, md: 4.5 },
                    borderRadius: '26px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, rgba(255, 184, 0, 0.07) 0%, rgba(17, 24, 39, 0.7) 100%)'
                        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(254, 243, 199, 0.4) 100%)',
                    border: (theme) =>
                      `1.5px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.25)' : 'rgba(217, 119, 6, 0.2)'}`,
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 12px 36px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                        : '0 10px 30px rgba(217, 119, 6, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'primary.main',
                      boxShadow: (theme) => `0 20px 45px ${theme.palette.primary.main}30`,
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: (theme) =>
                            `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                          color: '#000',
                          boxShadow: (theme) => `0 8px 20px ${theme.palette.secondary.main}45`,
                        }}
                      >
                        <TrendingUpIcon sx={{ fontSize: 30 }} />
                      </Box>
                      <Chip
                        label="Flexible Tiering"
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          background: (theme) =>
                            theme.palette.mode === 'dark' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(217, 119, 6, 0.1)',
                          color: 'secondary.main',
                          border: (theme) => `1px solid ${theme.palette.secondary.main}40`,
                        }}
                      />
                    </Stack>

                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5, letterSpacing: -0.3 }}>
                      Multi-Outlet Scaling
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                      Pricing flexes modularly depending on{' '}
                      <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        number of physical/cloud outlets
                      </Box>
                      , menu catalog size, and customized platform scopes — making it cost-effective for single kitchens up to regional chains.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mt: 3.5,
                      pt: 2.5,
                      borderTop: (theme) => `1px solid ${theme.custom.border.subtle}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.2,
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 18, color: 'secondary.main' }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                      Scales seamlessly with outlet additions
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Card 3: Production & Third-Party Costs */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 3.5, md: 4.5 },
                    borderRadius: '26px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, rgba(255, 184, 0, 0.07) 0%, rgba(17, 24, 39, 0.7) 100%)'
                        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(254, 243, 199, 0.4) 100%)',
                    border: (theme) =>
                      `1.5px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.25)' : 'rgba(217, 119, 6, 0.2)'}`,
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 12px 36px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                        : '0 10px 30px rgba(217, 119, 6, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'primary.main',
                      boxShadow: (theme) => `0 20px 45px ${theme.palette.primary.main}30`,
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: (theme) =>
                            `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          color: '#000',
                          boxShadow: (theme) => `0 8px 20px ${theme.palette.primary.main}45`,
                        }}
                      >
                        <CameraAltOutlinedIcon sx={{ fontSize: 30 }} />
                      </Box>
                      <Chip
                        label="100% Transparent"
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          background: (theme) =>
                            theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.15)' : 'rgba(217, 119, 6, 0.1)',
                          color: 'primary.main',
                          border: (theme) => `1px solid ${theme.palette.primary.main}40`,
                        }}
                      />
                    </Stack>

                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5, letterSpacing: -0.3 }}>
                      Third-Party &amp; Production
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                      Food photography, video reels, and influencer budgets are{' '}
                      <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        quoted transparently and charged separately
                      </Box>{' '}
                      at actuals, unless explicitly bundled into your custom contract scope.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mt: 3.5,
                      pt: 2.5,
                      borderTop: (theme) => `1px solid ${theme.custom.border.subtle}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.2,
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                      Zero hidden markups or surprise fees
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Bottom Support Banner */}
            <Box
              sx={{
                mt: 4.5,
                p: { xs: 3, md: 3.5 },
                borderRadius: '20px',
                background: (theme) =>
                  theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.05)' : 'rgba(217, 119, 6, 0.04)',
                border: (theme) =>
                  `1px dashed ${theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.35)' : 'rgba(217, 119, 6, 0.3)'}`,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2.5,
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  Have multiple outlets or a specific custom requirement?
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                  Talk with our restaurant growth team to tailor an exact scope for your brand.
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                href="#contact"
                sx={{
                  borderRadius: '50px',
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textTransform: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: (theme) => `0 6px 20px ${theme.palette.primary.main}40`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: (theme) => `0 10px 25px ${theme.palette.primary.main}50`,
                  },
                }}
              >
                Discuss Custom Scope &rarr;
              </Button>
            </Box>
          </Box>

        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default PackagesSection;
