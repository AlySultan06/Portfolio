/* eslint-disable no-unused-vars */
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <Box sx={{ bgcolor: "background.secondary", py: "50px" }}>
      <Container maxWidth="xl">
        <Stack direction="column" alignItems="center">
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              cursor: "pointer",
              display: "flex",
              fontWeight: 500,
              fontSize: { xs: "3.5rem", sm: "3.5rem" },
              letterSpacing: ".3rem",
              color: "background.primary",
              textDecoration: "none",
              mb: "15px",
            }}
          >
            @.
          </Typography>

          <Typography
            variant="h3"
            color="text.primary"
            sx={{ textAlign: "center", opacity: "0.8", mb: "25px" }}
          >
            Passion drives perfection.
          </Typography>

          <Box sx={{ display: "flex", gap: "25px",alignItems:"center" ,mb:"40px"}}>
            
            <Link href="mailto:your.email@gmail.com" >
            <IconButton
        sx={{
          padding: '10px',
          borderRadius: '50%',
          border: '1px solid',
          borderColor: 'text.primary',
          '&:hover': {
            bgcolor: 'text.primary',
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          },
        }}
      >
        <EmailIcon sx={{ color: 'text.primary', fontSize: '30px' }} />
      </IconButton>
            </Link>

            <Link href="https://www.instagram.com/alysultan2006/" target="_blank">
      <IconButton
        sx={{
          padding: '10px',
          borderRadius: '50%',
          border: '1px solid',
          borderColor: 'text.primary',
          '&:hover': {
            bgcolor: 'text.primary',
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          },
        }}
      >
        <InstagramIcon sx={{ color: 'text.primary', fontSize: '30px' }} />
      </IconButton>
    </Link>

          
            
          </Box>
        <Typography variant="body2" color="text.primary" sx={{position:"relative"}}>Handcrafted by me<CopyrightIcon sx={{color:"text.primary",top: "50%",transform:"translateY(-50%)",position: "absolute"}} /></Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
