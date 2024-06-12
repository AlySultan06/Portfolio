/* eslint-disable react/display-name */

/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { forwardRef } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

import certificate1 from "../../public/imgs/ReactBasicsImg.jpeg";
import certificate2 from "../../public/imgs/AdvancedReactImg.jpeg";

const Certificates = forwardRef((props, ref) => {
  const [open, setOpen] = useState([false, false]);

  function handleOpen(i) {
    let list = [...open];
    list[i] = true;
    setOpen(list);
  }

  function handleClose(i) {
    let list = [...open];
    list[i] = false;
    setOpen(list);
  }

  return (
    <Box sx={{ bgcolor: "background.secondary", py: "75px" }} ref={ref}>
      <Container maxWidth="xl">
        <Box sx={{ mb: "100px" }}>
          <Typography
            variant="h2"
            color="text.primary"
            sx={{ textAlign: "center", mb: "20px" }}
          >
            Certificates
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            sx={{ textAlign: "center", maxWidth: "900px", margin: "auto" }}
          >
            I have successfully completed two comprehensive certificates from
            Meta in React.js, demonstrating my expertise and commitment to
            mastering front-end development. These certifications cover a wide
            range of topics, including advanced JavaScript, modern React
            development, state management, and performance optimization
          </Typography>
        </Box>

        <Stack
          alignItems="center"
          justifyContent="space-evenly"
          gap={{ xs: "30px", sm: "30px", md: "0px" }}
          direction={{ xs: "column", sm: "column", md: "row" }}
        >
          <Box
            sx={{
              width: { xs: "90%", sm: "90%", md: "40%" },
              border: "1px solid",
              borderColor: "text.primary",
              cursor: "pointer",
            }}
            onClick={() => handleOpen(0)}
          >
            <img src={certificate1} />
          </Box>

          <Modal
            open={open[0]}
            onClose={() => handleClose(0)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open[0]}>
              <Box
                sx={{
                  width: { xs: "95%", sm: "75%", md: "50%" },
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: "none",
                }}
              >
                <img src={certificate1} />
              </Box>
            </Fade>
          </Modal>

          <Box
            sx={{
              width: { xs: "90%", sm: "90%", md: "40%" },
              border: "1px solid",
              borderColor: "text.primary",
              cursor: "pointer",
            }}
            onClick={() => handleOpen(1)}
          >
            <img src={certificate2} />
          </Box>

          <Modal
            open={open[1]}
            onClose={() => handleClose(1)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open[1]}>
              <Box
                sx={{
                  width: { xs: "95%", sm: "75%", md: "50%" },
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img src={certificate1} />
              </Box>
            </Fade>
          </Modal>
        </Stack>
      </Container>
    </Box>
  );
});

export default Certificates;
