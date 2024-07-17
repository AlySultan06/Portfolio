/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import countriesImage from "/imgs/Countries.png";
import quranImage from "/imgs/quran.png";
import nadaPortfolioImage from "/imgs/NadaPortfolio.png";

import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <Box sx={{ bgcolor: "background.primary", py: "75px" }} ref={ref}>
      <Container maxWidth="xl">
        <Box sx={{ mb: "100px" }}>
          <Typography
            variant="h2"
            color="text.secondary"
            sx={{ textAlign: "center", mb: "20px" }}
          >
            Projects
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", maxWidth: "900px", margin: "auto" }}
          >
            Welcome to my projects portfolio! Here, you'll find a selection of
            my most significant front-end development projects, showcasing my
            expertise in creating responsive, user-friendly web applications.
            Each project demonstrates my commitment to crafting elegant,
            efficient, and engaging digital experiences.
          </Typography>
        </Box>

        <Stack row="column">
          {/* project1 */}
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              alignItems: { xs: "center", sm: "center", md: "flex-start" },
              mb: "100px",
            }}
          >
            <Box sx={{ minWidth: { xs: "auto", sm: "auto", md: "450px" } }}>
              <Link href="https://ahlelquranacademy.netlify.app/" target="_blank">
                <img
                  src={quranImage}
                  alt="quran"
                  className="projectsimg"
                  style={{
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </Box>

            <Box
              sx={{
                maxWidth: "600px",
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
            >
              <Typography
                variant="h3"
                color="text.secondary"
                sx={{ mb: { xs: "15px", sm: "15px", md: "30px" } }}
              >
                Ahlelquran-online academy
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Ahlelquran-online is an online academy for teaching quran. I
                worked on this website to make the user experience as smooth as
                possible using the AOS libary to encourage the user to make more activities on the
                website
              </Typography>
            </Box>
          </Box>

          {/* project2 */}
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              alignItems: { xs: "center", sm: "center", md: "flex-start" },
              mb: "100px",
            }}
          >
            <Box sx={{ minWidth: { xs: "auto", sm: "auto", md: "450px" } }}>
              <Link
                href=" https://where-in-theworld.netlify.app/"
                target="_blank"
              >
                <img
                  src={countriesImage}
                  alt="countries"
                  className="projectsimg"
                  style={{
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                maxWidth: "600px",
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
            >
              <Typography
                variant="h3"
                color="text.secondary"
                sx={{ mb: { xs: "15px", sm: "15px", md: "30px" } }}
              >
                Where-in-the-world.com
              </Typography>
              <Typography variant="body1" color="text.secondary">
                The client requested me to make a gazetteer for all the
                countries in the world featuring information like egion and
                currency.The overall design was easy but mangaing the API
                requests and routing in react was the challenge in this project,
                but it was fun to make!
              </Typography>
            </Box>
          </Box>

          {/* project3 */}
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              alignItems: { xs: "center", sm: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ minWidth: { xs: "auto", sm: "auto", md: "450px" } }}>
              <Link href="https://drnadahelmy.netlify.app" target="_blank">
                <img
                  src={nadaPortfolioImage}
                  alt="countries"
                  className="projectsimg"
                  style={{
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                maxWidth: "600px",
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
            >
              <Typography
                variant="h3"
                color="text.secondary"
                sx={{ mb: { xs: "15px", sm: "15px", md: "30px" } }}
              >
                Dr Nada Helmy Portfolio
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Dr Nada wanted to make a unique and simple portfolio at the same
                time showcasing her projects and skills. I worked in this
                project on reducing dependencies as much as possible as she
                wanted to make it smooth and fast as possible.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
});

export default Projects;
