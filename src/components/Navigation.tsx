import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Container, 
  Stack,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Tooltip,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import Logo from '../junoLogo.jpg';
import { useColorMode } from '../ThemeContext';

// ─── Styled Components ───────────────────────────────────────────────

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(0, 0, 0, 0.8)'
    : 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(20px)',
  borderBottom: `1px solid ${theme.custom.border.default}`,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
    : '0 4px 20px rgba(0, 0, 0, 0.06)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const NavButton = styled(Button)<{ component?: React.ElementType }>(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: '0.9rem',
  padding: '6px 14px',
  borderRadius: '12px',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.1)' : 'rgba(217, 119, 6, 0.08)',
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  }
}));

const CTAButton = styled(Button)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
  fontSize: '0.92rem',
  padding: '8px 22px',
  borderRadius: '50px',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  boxShadow: `0 4px 15px ${theme.palette.primary.main}30`,
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 25px ${theme.palette.primary.main}50`,
  }
}));

const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  width: 42,
  height: 42,
  borderRadius: '12px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.06)'
    : 'rgba(0, 0, 0, 0.04)',
  border: `1px solid ${theme.custom.border.default}`,
  color: theme.palette.mode === 'dark'
    ? theme.palette.secondary.main
    : theme.palette.secondary.dark,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(245, 158, 11, 0.12)'
      : 'rgba(217, 119, 6, 0.1)',
    transform: 'rotate(15deg) scale(1.05)',
    borderColor: theme.palette.secondary.main,
  },
}));

// ─── Component ───────────────────────────────────────────────────────

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 1040px)');
  const { mode, toggleColorMode } = useColorMode();

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#operating-model' },
    { label: 'Why Juno', href: '#why-juno' },
    { label: 'Packages', href: '#packages' },
    { label: 'Client Testimonials', href: '#customer-testimonials' },
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Stack
      sx={{
        width: 260,
        height: '100%',
        background: theme.palette.mode === 'dark'
          ? 'rgba(0, 0, 0, 0.95)'
          : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        p: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <img
          src={Logo}
          alt="Juno Logo"
          style={{ height: '48px', width: '48px', borderRadius: '10px' }}
        />
        <Stack direction="row" spacing={1} alignItems="center">
          <ThemeToggleButton onClick={toggleColorMode} size="small">
            {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
          </ThemeToggleButton>
          <IconButton onClick={handleDrawerToggle} sx={{ color: theme.palette.text.primary }}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Stack>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: '12px',
                mb: 1,
                '&:hover': {
                  background: theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.1)' : 'rgba(217, 119, 6, 0.08)',
                  color: 'primary.main',
                }
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ mt: 2 }}>
          <CTAButton
            fullWidth
            component="a"
            href="#contact"
            onClick={handleDrawerToggle}
          >
            Talk to Us &rarr;
          </CTAButton>
        </ListItem>
        <ListItem sx={{ mt: 1 }}>
          <Button
            fullWidth
            component="a"
            href="tel:9967621552"
            variant="outlined"
            color="primary"
            startIcon={<PhoneRoundedIcon />}
            sx={{
              py: 1.2,
              borderRadius: '50px',
              fontWeight: 800,
              fontSize: '0.92rem',
              borderColor: 'primary.main',
              borderWidth: '1.5px',
            }}
          >
            Call: 9967621552
          </Button>
        </ListItem>
      </List>
    </Stack>
  );

  return (
    <>
      <GlassAppBar 
        position="fixed" 
        elevation={0}
        sx={{
          background: scrolled 
            ? (theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)')
            : undefined,
        }}
      >
        {/* Top Calling Details Bar - Bold Tab */}
        <Box
          sx={{
            background: 'linear-gradient(90deg, #FFB800 0%, #F59E0B 100%)',
            py: 0.65,
            px: 2,
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 2px 10px rgba(245, 158, 11, 0.25)',
          }}
        >
          <Container maxWidth="xl">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 1, sm: 1.5 }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '0.78rem', sm: '0.86rem' },
                  letterSpacing: '0.04em',
                  color: '#000000',
                  textTransform: 'uppercase',
                }}
              >
                Get in touch today!
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: 900 }}>
                •
              </Typography>
              <Box
                component="a"
                href="tel:9967621552"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.6,
                  bgcolor: '#000000',
                  color: '#FFB800',
                  textDecoration: 'none',
                  fontWeight: 900,
                  fontSize: { xs: '0.8rem', sm: '0.88rem' },
                  letterSpacing: '0.03em',
                  px: 1.5,
                  py: 0.3,
                  borderRadius: '50px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  '&:hover': {
                    bgcolor: '#1a1a1a',
                    transform: 'scale(1.05)',
                    color: '#FFC524',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)',
                  }
                }}
              >
                <PhoneRoundedIcon sx={{ fontSize: 15, color: '#FFB800' }} />
                <span>9967621552</span>
              </Box>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Toolbar 
            disableGutters 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              minHeight: { xs: '64px', md: '72px' },
              py: 0.5
            }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                mr: { md: 2, lg: 3 },
                flexShrink: 0,
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              <img
                src={Logo}
                alt="Juno Logo"
                style={{ height: '48px', width: '48px', borderRadius: '12px', display: 'block' }}
              />
            </Box>

            {!isMobile ? (
              <>
                <Stack 
                  direction="row" 
                  spacing={{ md: 0.5, lg: 1 }} 
                  alignItems="center"
                  sx={{ flexShrink: 0 }}
                >
                  {navItems.map((item) => (
                    <NavButton
                      key={item.label}
                      component="a"
                      href={item.href}
                      sx={{
                        fontSize: { md: '0.86rem', lg: '0.92rem' },
                        px: { md: 1.1, lg: 1.5 },
                      }}
                    >
                      {item.label}
                    </NavButton>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexShrink: 0, ml: 2 }}>
                  <Tooltip title={mode === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}>
                    <ThemeToggleButton onClick={toggleColorMode}>
                      {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                    </ThemeToggleButton>
                  </Tooltip>

                  <Box
                    component="a"
                    href="tel:9967621552"
                    sx={{
                      display: { xs: 'none', xl: 'inline-flex' },
                      alignItems: 'center',
                      gap: 0.8,
                      px: 2,
                      py: 0.8,
                      borderRadius: '50px',
                      background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.12)' : 'rgba(245, 158, 11, 0.12)',
                      border: (theme) => `1.5px solid ${theme.palette.primary.main}`,
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        background: (theme) => theme.palette.primary.main,
                        color: '#000000',
                        transform: 'translateY(-2px)',
                        boxShadow: (theme) => `0 6px 20px ${theme.palette.primary.main}50`,
                      }
                    }}
                  >
                    <PhoneRoundedIcon sx={{ fontSize: 16 }} />
                    <span>9967621552</span>
                  </Box>

                  <CTAButton component="a" href="#contact">
                    Talk to Us &rarr;
                  </CTAButton>
                </Stack>
              </>
            ) : (
              <Stack direction="row" spacing={1} alignItems="center">
                <ThemeToggleButton onClick={toggleColorMode} size="small">
                  {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                </ThemeToggleButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </GlassAppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            background: 'transparent',
            boxShadow: 'none',
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;