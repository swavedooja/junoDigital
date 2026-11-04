import React from 'react';
import { Box, Container, Typography, Stack, Grid, Chip, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const APPLY_EMAIL = 'ashitreyan@junodigital.in';

const roles = [
  {
    title: 'Operations Intern',
    type: 'Internship',
    location: 'Nagpur',
    summary: 'Help the team run day-to-day restaurant operations and client coordination.',
    subject: 'Application: Operations Intern',
  },
  {
    title: 'Accounts Manager',
    type: 'Full-time',
    location: 'Nagpur',
    summary: 'Manage restaurant client accounts and keep partnerships moving.',
    subject: 'Application: Accounts Manager',
  },
];

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 80% 20%, rgba(255, 184, 0, 0.08) 0%, transparent 45%),
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

const RoleCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: theme.custom.surface.card,
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.custom.border.default}`,
  borderRadius: '28px',
  boxShadow: theme.custom.shadow.card,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: theme.palette.primary.main,
    boxShadow: theme.custom.shadow.cardHover,
  },
}));

const CareersSection: React.FC = () => {
  return (
    <SectionContainer id="careers">
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Chip
              label="OPEN ROLES"
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
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              Work with{' '}
              <GradientText component="span" variant="h2">
                Juno
              </GradientText>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 720, fontWeight: 400, lineHeight: 1.6 }}
            >
              Two open positions on the Juno team in Nagpur.
            </Typography>
          </Stack>

          <Grid container spacing={4} sx={{ width: '100%' }}>
            {roles.map((role) => (
              <Grid size={{ xs: 12, md: 6 }} key={role.title}>
                <RoleCard>
                  <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip label={role.type} size="small" color="primary" sx={{ fontWeight: 700 }} />
                      <Chip label={role.location} size="small" variant="outlined" sx={{ fontWeight: 600 }} />
                    </Stack>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5 }}>
                      {role.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 4 }}>
                      {role.summary}
                    </Typography>
                    <Button
                      component="a"
                      href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(role.subject)}`}
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        mt: 'auto',
                        alignSelf: 'flex-start',
                        py: 1.4,
                        px: 3,
                        borderRadius: '50px',
                        fontWeight: 700,
                        color: (theme) => theme.palette.mode === 'dark' ? '#000000' : '#FFFFFF',
                      }}
                    >
                      Apply
                    </Button>
                  </CardContent>
                </RoleCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default CareersSection;
