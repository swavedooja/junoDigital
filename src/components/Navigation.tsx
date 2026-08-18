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
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../darkThemeLogo.png';

const GlassAppBar = styled(AppBar)(() => ({
  background: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
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
    background: 'rgba(16, 185, 129, 0.1)',
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  }
}));

const CTAButton = styled(Button)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  padding: '10px 24px',
  borderRadius: '50px',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
  }
}));

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#operating-model' },
    { label: 'Why Juno', href: '#why-juno' },
    { label: 'Case Studies', href: '#case-studies' },
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
        width: 250,
        height: '100%',
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(20px)',
        p: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <img src={Logo} alt="Juno Logo" style={{ height: '80px', width: '104px' }} />
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
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
                  background: 'rgba(16, 185, 129, 0.1)',
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
            Talk to Juno
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
            ? 'rgba(0, 0, 0, 0.95)' 
            : 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <img src={Logo} alt="Juno Logo" style={{ height: '80px', width: '104px' }} />

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

                <CTAButton component="a" href="#contact">
                  Talk to Juno
                </CTAButton>
              </>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
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