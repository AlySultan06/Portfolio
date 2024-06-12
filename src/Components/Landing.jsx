/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "../../public/imgs/avatar.svg";
import hero from "../../public/imgs/hero-devices.svg";

function Landing() {
  return (
  <Box>
    <Container maxWidth="xl">
      <Stack row="column" alignItems="center">
        
        <Typography variant="h1" color="text.primary" sx={{ mb: "10px" }}>
          Hello,i`m Aly
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ mb: "15px" }}>
          Front-End Developer
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.6",
            mb: "20px",
          }}
        >
          With a passion for crafting intuitive and dynamic web interfaces, I
          create high-performance applications using the latest front-end
          technologies. Let's build something amazing together.
        </Typography>
        <Box sx={{ mb: "130px" }}>
          <img src={Avatar} alt="avatar" />
        </Box>
        <Box sx={{ maxWidth: "800px" }}>
          <img src={hero} alt="hero" />
        </Box>
        
      </Stack>
      </Container>
      </Box>
   
  );
}

export default Landing;
