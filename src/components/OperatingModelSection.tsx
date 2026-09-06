import React, { useState } from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TuneIcon from '@mui/icons-material/Tune';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 10% 80%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
    ${theme.custom.gradient.sectionB}
  `,
  overflow: 'hidden',
}));

const TimelineWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  marginTop: theme.spacing(8),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 40,
    left: '5%',
    right: '5%',
    height: 4,
    background: theme.custom.border.subtle,
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  }
}));

const ProgressLine = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'activeStep',
})<{ activeStep: number }>(({ theme, activeStep }) => ({
  position: 'absolute',
  top: 40,
  left: '5%',
  width: `${(activeStep / 4) * 90}%`,
  height: 4,
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

const StepCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: active ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})` : theme.custom.surface.glass,
  border: active ? 'none' : `2px solid ${theme.custom.border.default}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
  cursor: 'pointer',
  zIndex: 3,
  position: 'relative',
  boxShadow: active ? `0 10px 25px ${theme.palette.primary.main}45` : 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.1)',
    borderColor: theme.palette.primary.main,
  }
}));

const StepCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  background: active ? theme.custom.surface.glass : theme.custom.surface.glassLight,
  backdropFilter: 'blur(20px)',
  border: active
    ? (theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.35)' : '1px solid rgba(217, 119, 6, 0.3)')
    : `1px solid ${theme.custom.border.subtle}`,
  borderRadius: '24px',
  padding: theme.spacing(4),
  textAlign: 'center',
  marginTop: theme.spacing(3),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  [theme.breakpoints.down('md')]: {
    marginTop: 0,
    textAlign: 'left',
    padding: theme.spacing(3),
  }
}));

const StepNumber = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: -15,
  right: 15,
  fontSize: '4rem',
  fontWeight: 800,
  opacity: 0.03,
  color: theme.palette.text.primary,
  userSelect: 'none',
}));

const steps = [
  {
    num: '01',
    icon: SearchIcon,
    title: 'Understand',
    description: 'We start with your restaurant, your customers, your market, and your numbers. We identify where you are today and where the biggest opportunities exist.'
  },
  {
    num: '02',
    icon: BuildIcon,
    title: 'Build',
    description: 'We create the right digital foundation — from platform presence and menus to food photography, pricing, and positioning.'
  },
  {
    num: '03',
    icon: RocketLaunchIcon,
    title: 'Launch',
    description: 'We get your restaurant live, activate the right platforms, and put the right campaigns and growth levers in place.'
  },
  {
    num: '04',
    icon: TuneIcon,
    title: 'Optimise',
    description: 'We continuously monitor performance, identify what is working, and fix what isn\'t.'
  },
  {
    num: '05',
    icon: ShowChartIcon,
    title: 'Grow',
    description: 'The goal is simple: More visibility. More orders. Better revenue. Healthier margins.'
  }
];

const OperatingModelSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SectionContainer id="operating-model">
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              We don't just advise.{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                We execute.
              </Box>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '700px', fontWeight: 400, lineHeight: 1.6 }}
            >
              Our approach combines strategy, technology, and hands-on execution.
            </Typography>
          </Stack>

          <TimelineWrapper>
            <ProgressLine activeStep={activeStep} />
            
            {/* Desktop Layout */}
            <Grid container spacing={2} justifyContent="space-between" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Grid key={index} sx={{ width: '18%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <StepCircle
                      active={index <= activeStep}
                      onClick={() => setActiveStep(index)}
                    >
                      <IconComponent sx={{ fontSize: 32 }} />
                    </StepCircle>
                    <StepCard active={index === activeStep} sx={{ width: '100%', minHeight: 280 }}>
                      <StepNumber>{step.num}</StepNumber>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {step.description}
                      </Typography>
                    </StepCard>
                  </Grid>
                );
              })}
            </Grid>

            {/* Mobile Layout */}
            <Stack spacing={3} sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Stack
                    direction="row"
                    spacing={2.5}
                    key={index}
                    alignItems="flex-start"
                    sx={{
                      p: 2.5,
                      borderRadius: '20px',
                      background: (theme) => activeStep === index 
                        ? (theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.08)' : 'rgba(217, 119, 6, 0.06)')
                        : theme.custom.surface.glassLight,
                      border: (theme) => activeStep === index 
                        ? (theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.3)' : '1px solid rgba(217, 119, 6, 0.25)')
                        : `1px solid ${theme.custom.border.subtle}`,
                    }}
                    onClick={() => setActiveStep(index)}
                  >
                    <StepCircle active={activeStep === index} sx={{ width: 56, height: 56, flexShrink: 0 }}>
                      <IconComponent sx={{ fontSize: 24 }} />
                    </StepCircle>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {step.description}
                      </Typography>
                    </Box>
                  </Stack>
                );
              })}
            </Stack>

          </TimelineWrapper>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default OperatingModelSection;
