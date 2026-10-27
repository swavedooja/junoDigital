import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Stack, 
  Card, 
  CardContent,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 60% 40%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
    ${theme.custom.gradient.sectionA}
  `,
  overflow: 'hidden',
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const ContactCard = styled(Card)(({ theme }) => ({
  background: theme.custom.surface.glass,
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.custom.border.default}`,
  borderRadius: '24px',
  maxWidth: '600px',
  margin: '0 auto',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: `0 20px 40px ${theme.custom.shadow.card}`,
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
  fontSize: '1.1rem',
  padding: '16px 40px',
  borderRadius: '50px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: `0 15px 35px ${theme.palette.primary.main}40`,
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    transform: 'translateY(-2px)',
    boxShadow: `0 20px 45px ${theme.palette.primary.main}60`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover::before': {
    left: '100%',
  }
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
  backdropFilter: 'blur(10px)',
  animation: 'floatGentle 8s ease-in-out infinite',
  '@keyframes floatGentle': {
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-15px) rotate(180deg)' },
  },
}));

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Talk to Juno',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', inquiryType: 'Talk to Juno', message: '' });
  };

  return (
    <SectionContainer id="contact">
      {/* Floating Elements */}
      <FloatingElement 
        sx={{ 
          width: 100, 
          height: 100, 
          top: '15%', 
          left: '10%',
          animationDelay: '0s'
        }} 
      />
      <FloatingElement 
        sx={{ 
          width: 80, 
          height: 80, 
          bottom: '20%', 
          right: '15%',
          animationDelay: '4s'
        }} 
      />

      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                animation: 'fadeInUp 1s ease-out',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Your food deserves{' '}
              <GradientText component="span" variant="h2">
                to be discovered.
              </GradientText>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '700px',
                fontWeight: 400,
                animation: 'fadeInUp 1s ease-out 0.2s both',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Let's make sure more customers find it, choose it and order it. Tell us about your restaurant. We'll identify where we can help you grow.
            </Typography>
          </Stack>

          <ContactCard
            sx={{
              width: '100%',
              animation: 'fadeInUp 1s ease-out 0.4s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <CardContent sx={{ p: 5 }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': {
                          color: 'primary.main',
                        }
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': {
                          color: 'primary.main',
                        }
                      }
                    }}
                  />

                  <FormControl 
                    fullWidth 
                    variant="outlined"
                    sx={(theme) => ({
                      '& .MuiOutlinedInput-root': {
                        background: theme.custom.surface.input,
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        '& fieldset': {
                          border: `1px solid ${theme.custom.border.default}`,
                        },
                        '&:hover fieldset': {
                          border: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255, 184, 0, 0.5)' : '1px solid rgba(217, 119, 6, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          border: (theme) => `2px solid ${theme.palette.primary.main}`,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': {
                          color: 'primary.main',
                        }
                      }
                    })}
                  >
                    <InputLabel id="inquiry-select-label">I want to...</InputLabel>
                    <Select
                      labelId="inquiry-select-label"
                      id="inquiry-select"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      label="I want to..."
                      required
                    >
                      <MenuItem value="Talk to Juno">Talk to Juno (General Consultation)</MenuItem>
                      <MenuItem value="Get Online Plan">01 — Get Online (One-Time Setup from ₹4,999)</MenuItem>
                      <MenuItem value="Get Growing Plan">02 — Get Growing (Monthly Plan ₹14,999/mo)</MenuItem>
                      <MenuItem value="Get Ahead Plan">03 — Get Ahead (Growth + P&L Plan ₹24,999/mo)</MenuItem>
                      <MenuItem value="Get a Growth Assessment">Get a Free Growth Assessment</MenuItem>
                      <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    label="Tell us about your restaurant and goals"
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': {
                          color: 'primary.main',
                        }
                      }
                    }}
                  />

                  <SubmitButton type="submit">
                    Send Message
                  </SubmitButton>
                </Stack>
              </form>
            </CardContent>
          </ContactCard>

          <Grid 
            container 
            spacing={3} 
            sx={{
              mt: 2,
              animation: 'fadeInUp 1s ease-out 0.6s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
            justifyContent="center"
          >
            {/* Address */}
            <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  background: (theme) => theme.custom.surface.glass,
                  border: (theme) => `1px solid ${theme.custom.border.default}`,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.12)' : 'rgba(255, 184, 0, 0.15)',
                    color: 'primary.main',
                    mb: 1.5,
                  }}
                >
                  <LocationOnRoundedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Typography variant="subtitle1" color="primary.main" fontWeight={700} sx={{ mb: 0.5 }}>
                  Office Address
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  4th Floor, C-Square, Mata Mandir Rd, Dharampeth, Nagpur, Maharashtra 440010
                </Typography>
              </Box>
            </Grid>

            {/* Phone */}
            <Grid size={{ xs: 12, sm: 6, md: 2.75 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  background: (theme) => theme.custom.surface.glass,
                  border: (theme) => `1px solid ${theme.custom.border.default}`,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.12)' : 'rgba(255, 184, 0, 0.15)',
                    color: 'primary.main',
                    mb: 1.5,
                  }}
                >
                  <PhoneRoundedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Typography variant="subtitle1" color="primary.main" fontWeight={700} sx={{ mb: 0.5 }}>
                  Contact
                </Typography>
                <Typography 
                  component="a" 
                  href="tel:9967621552" 
                  variant="body2" 
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}
                >
                  +91 9967621552
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                  Response within 24 hours
                </Typography>
              </Box>
            </Grid>

            {/* Email */}
            <Grid size={{ xs: 12, sm: 6, md: 2.75 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  background: (theme) => theme.custom.surface.glass,
                  border: (theme) => `1px solid ${theme.custom.border.default}`,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.12)' : 'rgba(255, 184, 0, 0.15)',
                    color: 'primary.main',
                    mb: 1.5,
                  }}
                >
                  <EmailRoundedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Typography variant="subtitle1" color="primary.main" fontWeight={700} sx={{ mb: 0.5 }}>
                  Email Us
                </Typography>
                <Typography 
                  component="a" 
                  href="mailto:ashitreyan@junodigital.in" 
                  variant="body2" 
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 600,
                    wordBreak: 'break-all',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}
                >
                  ashitreyan@junodigital.in
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                  Direct Partner Inquiries
                </Typography>
              </Box>
            </Grid>

            {/* Operating Cities */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  background: (theme) => theme.custom.surface.glass,
                  border: (theme) => `1px solid ${theme.custom.border.default}`,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 184, 0, 0.12)' : 'rgba(255, 184, 0, 0.15)',
                    color: 'primary.main',
                    mb: 1.5,
                  }}
                >
                  <AccessTimeRoundedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Typography variant="subtitle1" color="primary.main" fontWeight={700} sx={{ mb: 0.5 }}>
                  Locations Served
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Nagpur | Raipur | Yavatmal | Amravati | Wardha
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Thank you for your message! We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </SectionContainer>
  );
};

export default ContactSection;