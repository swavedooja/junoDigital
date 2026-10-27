import React from 'react';
import { Box, Container, Typography, Stack, Grid, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 90% 70%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 10% 20%, rgba(255, 184, 0, 0.06) 0%, transparent 45%),
    ${theme.custom.gradient.sectionB}
  `,
  overflow: 'hidden',
}));

const PainCard = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(17, 24, 39, 0.65)'
    : 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(16px)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(245, 158, 11, 0.18)'
    : '1px solid rgba(217, 119, 6, 0.15)',
  borderRadius: '24px',
  padding: theme.spacing(3.5),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 6px 20px rgba(0, 0, 0, 0.25)'
    : '0 6px 20px rgba(0, 0, 0, 0.04)',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(245, 158, 11, 0.08)'
      : 'rgba(255, 251, 235, 0.95)',
    borderColor: theme.palette.mode === 'dark'
      ? 'rgba(245, 158, 11, 0.45)'
      : 'rgba(217, 119, 6, 0.4)',
    transform: 'translateY(-6px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 16px 36px rgba(0, 0, 0, 0.45), 0 0 20px rgba(245, 158, 11, 0.15)'
      : '0 16px 36px rgba(217, 119, 6, 0.12)',
    '& .pain-icon-box': {
      transform: 'scale(1.08)',
      boxShadow: '0 8px 20px rgba(245, 158, 11, 0.35)',
    }
  }
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 52,
  height: 52,
  borderRadius: '16px',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.1) 100%)'
    : 'linear-gradient(135deg, rgba(254, 243, 199, 1) 0%, rgba(253, 230, 138, 0.7) 100%)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(245, 158, 11, 0.3)'
    : '1px solid rgba(217, 119, 6, 0.25)',
  color: theme.palette.mode === 'dark' ? '#FBBF24' : '#D97706',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  transition: 'all 0.3s ease',
}));

const painPoints = [
  {
    icon: StorefrontRoundedIcon,
    tag: 'Platform Friction',
    title: 'Getting Listed on Swiggy & Zomato',
    desc: 'Chasing partner managers, endless document re-submissions, bank verification delays, and waiting weeks just to go live.',
  },
  {
    icon: MenuBookRoundedIcon,
    tag: 'Daily Grind',
    title: 'Keeping Your Menu Updated',
    desc: 'Toggling out-of-stock items, adjusting combo rates, updating taxes, and fixing broken variants across portals at 11 PM.',
  },
  {
    icon: CameraAltRoundedIcon,
    tag: 'High Cost & Hassle',
    title: 'Getting Proper Food Photography',
    desc: 'Organizing disruptive shoots during rush hours, paying steep photographer fees, and facing sudden portal image rejections.',
  },
  {
    icon: LocalOfferRoundedIcon,
    tag: 'Margin Bleed',
    title: 'Managing Offers & Promotions',
    desc: 'Trying to survive aggressive discount wars without accidentally wiping out your margins and selling at a net loss.',
  },
  {
    icon: QueryStatsRoundedIcon,
    tag: 'The Black Box',
    title: 'Decoding Order Drops & Surges',
    desc: 'Guessing why yesterday brought 120 orders but today brought 15 — with zero insight into algorithm penalties or ranking dips.',
  },
  {
    icon: CelebrationRoundedIcon,
    tag: 'Missed Opportunity',
    title: 'Planning Festival & Weekend Pushes',
    desc: 'Scrambling last-minute for Diwali, New Year, match days, or rainy surges while your kitchen is already in total chaos.',
  },
  {
    icon: ReceiptLongRoundedIcon,
    tag: 'Financial Leakage',
    title: 'Tracking True Sales & Payout Leaks',
    desc: 'Deciphering cryptic weekly payment statements, cancellation penalties, customer refunds, and undisclosed ad deductions.',
  },
];

const ProblemSection: React.FC = () => {
  return (
    <SectionContainer id="problem">
      <Container maxWidth="lg">
        <Stack spacing={7} alignItems="center">
          
          {/* Header */}
          <Stack spacing={2.5} alignItems="center" textAlign="center">
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 0.75,
                borderRadius: '50px',
                background: (theme) =>
                  theme.palette.mode === 'dark' ? 'rgba(245, 158, 11, 0.12)' : 'rgba(217, 119, 6, 0.08)',
                border: (theme) => `1px solid ${theme.palette.secondary.main}40`,
                color: 'secondary.main',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: 1.2,
                textTransform: 'uppercase',
              }}
            >
              <AccessTimeRoundedIcon sx={{ fontSize: 17 }} />
              <span>The Operational Reality</span>
            </Box>

            <Typography variant="h2" sx={{ fontWeight: 800, maxWidth: '950px' }}>
              Running a restaurant is already a{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                full-time job.
              </Box>
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '820px', fontWeight: 400, lineHeight: 1.7, fontSize: '1.15rem' }}
            >
              Your focus should be on your food, your staff, and your dining room.
              Yet modern food delivery has forced restaurateurs to take on a second, exhausting full-time job: digital platform management.
            </Typography>
          </Stack>

          {/* Pain Points Grid */}
          <Grid container spacing={3} sx={{ width: '100%' }} alignItems="stretch">
            {painPoints.map((item, index) => {
              const IconCmp = item.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <PainCard>
                    <Box>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.5 }}>
                        <IconBox className="pain-icon-box">
                          <IconCmp sx={{ fontSize: 28 }} />
                        </IconBox>
                        <Chip
                          label={item.tag}
                          size="small"
                          sx={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            letterSpacing: 0.5,
                            textTransform: 'uppercase',
                            background: (theme) =>
                              theme.palette.mode === 'dark' ? 'rgba(245, 158, 11, 0.12)' : 'rgba(217, 119, 6, 0.08)',
                            color: (theme) =>
                              theme.palette.mode === 'dark' ? '#FBBF24' : '#D97706',
                            border: (theme) =>
                              `1px solid ${theme.palette.mode === 'dark' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(217, 119, 6, 0.2)'}`,
                          }}
                        />
                      </Stack>

                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.2, lineHeight: 1.35, fontSize: '1.05rem' }}>
                        {item.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {item.desc}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 2.5, pt: 2, borderTop: (theme) => `1px dashed ${theme.custom.border.subtle}` }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: 0.8 }}>
                        <span>⚠️</span> Takes hours away from your kitchen
                      </Typography>
                    </Box>
                  </PainCard>
                </Grid>
              );
            })}

            {/* 8th Card: The Summary Burnout Card */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={(theme) => ({
                  height: '100%',
                  p: 3.5,
                  borderRadius: '24px',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, rgba(239, 68, 68, 0.08) 0%, rgba(245, 158, 11, 0.05) 100%)'
                    : 'linear-gradient(145deg, rgba(254, 226, 226, 0.5) 0%, rgba(254, 243, 199, 0.6) 100%)',
                  border: theme.palette.mode === 'dark'
                    ? '1.5px dashed rgba(245, 158, 11, 0.35)'
                    : '1.5px dashed rgba(217, 119, 6, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'secondary.main',
                  }
                })}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: (theme) =>
                      theme.palette.mode === 'dark' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(217, 119, 6, 0.12)',
                    color: 'secondary.main',
                  }}
                >
                  <AccessTimeRoundedIcon sx={{ fontSize: 32 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: 'text.primary' }}>
                  20+ Hours Lost Every Week
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Most restaurant owners simply don't have the bandwidth, time, or technical platform expertise to handle all of this alone.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Visual Bridge: Seamless connection leading directly into Juno's Solution */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: -2 }}>
            <Box
              sx={{
                width: 2,
                height: 48,
                background: (theme) =>
                  `linear-gradient(180deg, ${theme.palette.secondary.main}80 0%, ${theme.palette.primary.main} 100%)`,
              }}
            />
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 0.8,
                borderRadius: '50px',
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                color: '#000',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: 1,
                textTransform: 'uppercase',
                boxShadow: (theme) => `0 8px 24px ${theme.palette.primary.main}45`,
              }}
            >
              <span>The Antidote</span>
              <ArrowDownwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box
              sx={{
                width: 2,
                height: 48,
                background: (theme) =>
                  `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main}80 100%)`,
              }}
            />
          </Box>

          {/* Blended Solution Hero Banner — Seamlessly integrated */}
          <Box
            sx={{
              width: '100%',
              position: 'relative',
              borderRadius: { xs: '24px', md: '36px' },
              p: { xs: 4, sm: 6, md: 7 },
              overflow: 'hidden',
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, rgba(255, 184, 0, 0.12) 0%, rgba(245, 158, 11, 0.04) 40%, rgba(17, 24, 39, 0.95) 100%)'
                  : 'linear-gradient(145deg, rgba(254, 243, 199, 0.9) 0%, rgba(255, 251, 235, 0.98) 45%, #FFFFFF 100%)',
              border: (theme) =>
                `2px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.35)' : 'rgba(217, 119, 6, 0.3)'}`,
              boxShadow: (theme) =>
                theme.palette.mode === 'dark'
                  ? '0 24px 60px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
                  : '0 20px 50px rgba(217, 119, 6, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              transition: 'all 0.4s ease',
            }}
          >
            {/* Ambient Background Glow */}
            <Box
              sx={{
                position: 'absolute',
                top: '-30%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '80%',
                borderRadius: '50%',
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'radial-gradient(circle, rgba(255, 184, 0, 0.2) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none',
              }}
            />

            <Stack spacing={3.5} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
              
              {/* Partner Icon Badge */}
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  color: '#000',
                  boxShadow: (theme) => `0 12px 28px ${theme.palette.primary.main}50`,
                }}
              >
                <HandshakeOutlinedIcon sx={{ fontSize: 38 }} />
              </Box>

              {/* Exact Hero Lines Requested */}
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: -0.5,
                    fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
                    mb: 2,
                  }}
                >
                  That's where{' '}
                  <Box
                    component="span"
                    sx={{
                      background: (theme) =>
                        `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Juno
                  </Box>{' '}
                  comes in.
                </Typography>

                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{
                    maxWidth: '820px',
                    mx: 'auto',
                    fontWeight: 500,
                    lineHeight: 1.7,
                    fontSize: { xs: '1.1rem', md: '1.35rem' },
                    color: (theme) => theme.palette.mode === 'dark' ? '#E5E7EB' : '#374151',
                  }}
                >
                  We become an extension of your team and take care of the digital side of your restaurant business.
                </Typography>
              </Box>

              {/* Relief Value Pillars */}
              <Grid container spacing={2} sx={{ maxWidth: 880, width: '100%', pt: 1 }} justifyContent="center">
                {[
                  'Zero Platform Headaches',
                  'Always-Optimized Menus',
                  'Data-Driven Daily Growth',
                  'Dedicated Food-Tech Team',
                ].map((pillar, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '16px',
                        background: (theme) =>
                          theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)',
                        border: (theme) => `1px solid ${theme.custom.border.subtle}`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        textAlign: 'left',
                      }}
                    >
                      <CheckCircleRoundedIcon sx={{ fontSize: 22, color: 'primary.main', flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {pillar}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Direct CTA */}
              <Box sx={{ pt: 1.5 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contact"
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 5,
                    py: 1.6,
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    textTransform: 'none',
                    background: (theme) =>
                      `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    boxShadow: (theme) => `0 8px 25px ${theme.palette.primary.main}50`,
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: (theme) => `0 14px 35px ${theme.palette.primary.main}65`,
                    },
                  }}
                >
                  Let Juno Handle Your Digital Side &rarr;
                </Button>
              </Box>

            </Stack>
          </Box>

        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default ProblemSection;
