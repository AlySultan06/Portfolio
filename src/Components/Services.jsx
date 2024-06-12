/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import WebIcon from "@mui/icons-material/Web";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

import { forwardRef } from "react";






const Services = forwardRef((props, ref) => {
  const services = [
    {
      title: "Web Development",
      description:
        "I specialize in crafting user-friendly websites that deliver an exceptional user experience. As a React.js developer, I excel in building dynamic Single Page Applications (SPAs) that provide smooth, seamless interactions.",
    },
    {
      title: "Performance Optimization",
      description:
        "I specialize in optimizing website performance to ensure fast load times and a smooth user experience, and adding any new features you would like to make.I can help your site run efficiently and keep users engaged.",
    },
    {
      title: "Responsivability",
      description:
        "Ensuring your website looks and performs flawlessly across all screen sizes is paramount. I specialize in responsive web development, creating sites that adapt beautifully to any device, from desktops to smartphones.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.primary", py: "75px" }} ref={ref}>
      <Container maxWidth="xl">
        <Box sx={{ mb: "60px" }}>
          <Typography
            variant="h2"
            color="text.secondary"
            sx={{ textAlign: "center", mb: "20px" }}
          >
            Services
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center",maxWidth:"900px",margin:"auto"}}
          >
            I offer a comprehensive range of web development services designed
            to create high-quality, engaging, and efficient websites. With a
            focus on modern technologies and best practices, I ensure your
            digital presence stands out and meets the evolving needs of your
            audience. Explore my key services
          </Typography>
        </Box>

        <Stack
          justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
          direction="row"
          flexWrap="wrap"
          gap={{ sm: "10px" }}
        >
          {services.map((service) => {
            let icon;
            if (service.title === "Web Development") {
              icon = (
                <WebIcon
                  sx={{
                    color: "text.primary",
                    bgcolor: "#5BE9B9",
                    fontSize: "70px",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              );
            } else if (service.title == "Performance Optimization") {
              icon = (
                <KeyboardDoubleArrowUpIcon
                  sx={{
                    color: "text.primary",
                    bgcolor: "#5BE9B9",
                    fontSize: "70px",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              );
            } else {
              icon = (
                <SmartphoneIcon
                  sx={{
                    color: "text.primary",
                    bgcolor: "#5BE9B9",
                    fontSize: "70px",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              );
            }

            return (
              <Box
                key={service.title}
                sx={{
                  textAlign: "center",
                  mb: "20px",
                  bgcolor: "background.secondary",
                  borderRadius: "7px",
                  py: "30px",
                  px: "15px",
                  width: {
                    xs: "95%",
                    sm: "calc(96% / 2)",
                    md: "calc(97% / 3)",
                  },
                }}
              >
                {icon}
                <Typography
                  variant="h3"
                  color="text.primary"
                  sx={{ mb: "15px" }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ mb: "10px", maxWidth: "500px" }}
                >
                  {service.description}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );






})

export default Services;
