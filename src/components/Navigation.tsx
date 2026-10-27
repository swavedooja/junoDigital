import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Container, 
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
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
  fontSize: '1rem',
  padding: '8px 16px',
  borderRadius: '12px',
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
  padding: '10px 24px',
  borderRadius: '50px',
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleColorMode } = useColorMode();

  const navItems = [
    { label: 'Customer Testimonials', href: '#customer-testimonials' },
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#operating-model' },
    { label: 'Why Juno', href: '#why-juno' },
    { label: 'Packages', href: '#packages' },
    { label: 'About Us', href: '#about' },
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
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <img
              src={Logo}
              alt="Juno Logo"
              style={{ height: '52px', width: '52px', borderRadius: '12px' }}
            />

            {!isMobile ? (
              <>
                <Stack direction="row" spacing={1}>
                  {navItems.map((item) => (
                    <NavButton
                      key={item.label}
                      component="a"
                      href={item.href}
                    >
                      {item.label}
                    </NavButton>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Tooltip title={mode === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}>
                    <ThemeToggleButton onClick={toggleColorMode}>
                      {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                    </ThemeToggleButton>
                  </Tooltip>

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