import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LayersIcon from '@mui/icons-material/Layers';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const SectionContainer = styled(Box)(() => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 30% 60%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
    linear-gradient(180deg, rgba(17, 24, 39, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)
  `,
  overflow: 'hidden',
}));

const CategoryCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '20px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(16, 185, 129, 0.04)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
    transform: 'translateY(-6px)',
    '& .cat-icon': {
      color: theme.palette.secondary.main,
      transform: 'scale(1.1) rotate(-5deg)',
    }
  }
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '14px',
  background: 'rgba(255, 255, 255, 0.03)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px auto',
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
}));

const categories = [
  { title: 'Restaurants', icon: LocalDiningIcon, desc: 'Casual dining, fine dining, and family-style restaurants.' },
  { title: 'QSRs', icon: FastfoodIcon, desc: 'Quick service operations built for speed and volume.' },
  { title: 'Cafés', icon: LocalCafeIcon, desc: 'Coffee shops, bakeries, and casual neighbourhood hangouts.' },
  { title: 'Cloud Kitchens', icon: KitchenIcon, desc: 'Delivery-first food concepts and virtual brands.' },
  { title: 'Multi-Outlet Brands', icon: LayersIcon, desc: 'Local and regional chains scaling to multiple locations.' },
  { title: 'Emerging F&B Brands', icon: AutoAwesomeIcon, desc: 'New food concepts launching into competitive markets.' }
];

const WhoWeWorkWithSection: React.FC = () => {
  return (
    <SectionContainer id="who-we-work-with">
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              From neighbourhood favourites to{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                emerging F&B brands.
              </Box>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', fontWeight: 400, lineHeight: 1.6 }}
            >
              Whether you're running one outlet or building your next ten, we build our approach around where your restaurant is today and where you want to go next.
            </Typography>
          </Stack>

          <Grid container spacing={3} alignItems="stretch">
            {categories.map((cat, index) => {
              const IconComponent = cat.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <CategoryCard>
                    <CardContent sx={{ p: 4 }}>
                      <IconBox className="cat-icon">
                        <IconComponent sx={{ fontSize: 28 }} />
                      </IconBox>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                        {cat.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {cat.desc}
                      </Typography>
                    </CardContent>
                  </CategoryCard>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default WhoWeWorkWithSection;
