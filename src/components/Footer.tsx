import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)' : 'linear-gradient(135deg, #F3F4F6 0%, #FAFAFA 100%)',
  backdropFilter: 'blur(20px)',
  borderTop: `1px solid ${theme.custom.border.default}`,
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(10),
}));

const LogoText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700,
  fontSize: '1.5rem',
  fontFamily: '"Space Grotesk", sans-serif',
}));

const FooterLink = styled(Button)<{ component?: React.ElementType }>(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  textTransform: 'none',
  padding: '6px 12px',
  '&:hover': {
    color: theme.palette.primary.main,
    background: 'transparent',
  }
}));

const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Customer Testimonials', href: '#customer-testimonials' },
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#operating-model' },
    { label: 'Why Juno', href: '#why-juno' },
    { label: 'Packages', href: '#packages' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            spacing={4}
          >
            <Stack spacing={1.5} alignItems={{ xs: 'center', md: 'flex-start' }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <LogoText>Juno Digital Services</LogoText>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                Restaurant Growth | Food-Tech | Digital Services
              </Typography>
              <Typography variant="body2" color="primary.main" sx={{ fontWeight: 500 }}>
                Nagpur | Pune | Maharashtra
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 1 }}
              justifyContent="center"
              flexWrap="wrap"
            >
              {navLinks.map((link) => (
                <FooterLink key={link.label} component="a" href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </Stack>
          </Stack>

          <Box sx={{ borderTop: (theme) => `1px solid ${theme.custom.border.subtle}`, pt: 3 }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="body2" color="text.secondary">
                Helping restaurants grow in the digital age.
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="right">
                © {new Date().getFullYear()} Juno Digital Services. All Rights Reserved.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;