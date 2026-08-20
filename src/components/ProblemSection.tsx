import React from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 90% 70%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
    ${theme.custom.gradient.sectionB}
  `,
  overflow: 'hidden',
}));

const ProblemCard = styled(Box)(({ theme }) => ({
  background: theme.custom.surface.glassLight,
  border: `1px solid ${theme.custom.border.subtle}`,
  borderRadius: '20px',
  padding: theme.spacing(3),
  height: '100%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    background: 'rgba(245, 158, 11, 0.03)',
    borderColor: 'rgba(245, 158, 11, 0.3)',
    transform: 'translateY(-4px)',
  }
}));

const SolutionBanner = styled(Box)(({ theme }) => ({
  background: 'rgba(16, 185, 129, 0.08)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(16, 185, 129, 0.2)',
  borderRadius: '28px',
  padding: theme.spacing(6, 4),
  marginTop: theme.spacing(8),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: `0 15px 35px ${theme.custom.shadow.card}`,
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '12px',
  background: 'rgba(245, 158, 11, 0.1)',
  color: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  flexShrink: 0,
}));

const problems = [
  'Getting listed on Swiggy and Zomato',
  'Keeping your menu updated',
  'Getting the right food photographs',
  'Managing offers and promotions',
  'Understanding why orders go up or down',
  'Planning campaigns around festivals',
  'Tracking your sales and performance'
];

const ProblemSection: React.FC = () => {
  return (
    <SectionContainer id="problem">
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center" textAlign="center">
          <Typography variant="h2" sx={{ fontWeight: 700, maxWidth: '900px' }}>
            Running a restaurant is already a{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              full-time job.
            </Box>
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '800px', fontWeight: 400, lineHeight: 1.6 }}
          >
            Your focus should be on your food, your people, and your customers.
            But today's restaurant business comes with another complex layer of digital work.
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2, width: '100%' }}>
            {problems.map((problem, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <ProblemCard>
                  <IconBox>
                     <WarningAmberRoundedIcon />
                  </IconBox>
                  <Typography variant="body1" sx={{ fontWeight: 500, textAlign: 'left' }}>
                    {problem}
                  </Typography>
                </ProblemCard>
              </Grid>
            ))}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={(theme) => ({
                  background: theme.custom.surface.glassLight,
                  border: `1px dashed ${theme.custom.border.default}`,
                  borderRadius: '20px',
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                })}
              >
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  And most owners simply don't have the time to do all of it.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <SolutionBanner>
            <Stack spacing={3} alignItems="center">
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckCircleRoundedIcon sx={{ fontSize: 36 }} />
              </Box>

              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                That's where{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Juno
                </Box>{' '}
                comes in.
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: '800px', fontWeight: 400, lineHeight: 1.6 }}
              >
                We become an extension of your team and take care of the digital side of your restaurant business.
              </Typography>
            </Stack>
          </SolutionBanner>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default ProblemSection;
