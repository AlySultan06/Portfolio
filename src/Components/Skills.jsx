/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect, useRef,forwardRef } from "react";







const Skills = forwardRef((props,ref) => {

  const [values, setValues] = useState([0, 0, 0, 0,0]);
  const progressBox = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setValues([94,89, 86, 83, 88,82]);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.4 });

    
      observer.observe(progressBox.current);
    

    // Cleanup the observer on component unmount
    return () => {
      if (progressBox.current) {
        observer.unobserve(progressBox.current);
      }
    };
  }, [progressBox]);

  const skills = [
    { name: "HTML", value: 94 },
    { name: "CSS", value: 89 },
    { name: "Javascript", value: 86 },
    { name: "React JS", value: 83 },
    { name: "Material UI", value: 88 },
    {name:"Git and Git hub", value:82}
  ];

  return (
    <Box sx={{ bgcolor: "background.secondary", py: "75px" }} ref={ref}>
      <Container maxWidth="xl">
        <Box sx={{ mb: "60px" }}>
          <Typography
            variant="h2"
            color="text.primary"
            sx={{ textAlign: "center", mb: "20px" }}
          >
            Skills
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            sx={{ textAlign: "center", maxWidth: "900px", margin: "auto" }}
          >
            With a strong foundation in modern web development technologies and a
            commitment to best practices, I bring a diverse set of skills to the
            table. My expertise ensures that I can deliver high-quality,
            efficient, and visually appealing web solutions.
          </Typography>
        </Box>

        <Box ref={progressBox}>
          {skills.map((skill, i) => (
            <Box
              key={skill.name}
              sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", mb: "35px", color: "background.primary" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <Typography variant="body1" color="text.primary">{skill.name}</Typography>
                <Typography variant="body1" color="text.primary" sx={{ px: "4px", border: "1px solid", borderColor: "text.primary", color: "text.primary", fontWeight: "700" }}>
                  {`${values[i]}%`}
                </Typography>
              </Box>

              <LinearProgress variant="determinate" value={values[i]} color="inherit" sx={{ height: "21px", width: "100%", borderRadius: "10px" }} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );

})


export default Skills;
