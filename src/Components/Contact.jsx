/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

 import Fade from '@mui/material/Fade';







const Contact = forwardRef((props, ref) => {

  const [loading,setLoading] = useState("normal")

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = (values) => {
    setLoading(true);
    const serviceId = "service_b7e186j";
    const templateId = "template_a757pbb";
    const formData = {
      from_name: values.name,
      message: values.message,
      from_email: values.email,
    };
    const userID = "emhZupOE1kxGRCE2R";
    

    
    emailjs
      .send(serviceId, templateId, formData, userID)
      .then((r) => {
        console.log(r);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });




  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid format").required("Required"),
    message: Yup.string().required("Write your message"),
  });

  return (
    <Box sx={{ bgcolor: "background.primary", py: "75px" }} ref={ref}>
      <Container maxWidth="xl">
        <Box sx={{ mb: "100px" }}>
          <Typography
            variant="h2"
            color="text.secondary"
            sx={{ textAlign: "center", mb: "20px" }}
          >
            Contact me!
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", maxWidth: "900px", margin: "auto" }}
          >
            Don`t hesitate to contact me anytime.
          </Typography>
        </Box>
        <FormContent initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema} loading={loading}/>
      </Container>
    </Box>
  );
});




function FormContent(props){


if(props.loading === true){
  return(
    <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
  <CircularProgress sx={{color:"white"}} size={150}/>
  </Box>)
}

if(props.loading === "normal"){
  return(<Formik
    initialValues={props.initialValues}
    onSubmit={props.onSubmit}
    validationSchema={props.validationSchema}
    enableReinitialize={true}
    >
    {({ errors, touched }) => (
      <Form
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
        
        }}
      >
        <label style={{color:"white"}}>Name</label>
        <Field name="name">
          {({ field }) => (
            <TextField
              {...field}
             
              placeholder="Enter your name here"
              fullWidth
              error={touched.name && !!errors.name}
              InputLabelProps={{ shrink: false }}
              helperText={touched.name && errors.name}
              sx={{'&:hover':{border:"none"}, 
              "& .MuiInputBase-input::placeholder": {
                color: "white",  // Change placeholder color here
                opacity: 0.4,
                 
              },
              
              "& .MuiInputBase-input":{
                color:"white",
              
              }
,
              "& .MuiOutlinedInput-root":{
                "& fieldset":{}
                
              }
          

              ,mb:"10px"}}  // Add custom styling here
            />
          )}
        </Field>
    
    
    
        <label style={{color:"white"}}>Email</label>
        <Field name="email">
          {({ field }) => (
            
            <TextField
              {...field}
              placeholder="Enter your email address"
              type="email"
              fullWidth
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{'&:hover':{border:"none"},  "& .MuiInputBase-input":{
                color:"white"
              },"& .MuiInputBase-input::placeholder": {
                color: "white",  // Change placeholder color here
                opacity: 0.4,  // Ensure placeholder is fully opaque
              },mb:"10px",color:"white"}}   // Add custom styling here
            />
          )}
        </Field>
    
    
    
        <label style={{color:"white"}}>Message</label>
        <Field name="message">
          {({ field }) => (
            <TextField
              {...field}
              placeholder="Enter your message"
              multiline
              rows={10}
              fullWidth
              
              error={touched.message && !!errors.message}
              helperText={touched.message && errors.message}
              sx={{"& .MuiInputBase-input::placeholder": {
                color: "white",  // Change placeholder color here
                opacity: 0.4,  // Ensure placeholder is fully opaque
              }, "& .MuiInputBase-input":{
                color:"white"
              },mb:"10px",
            color:"white"
            }}   // Add custom styling here
            />
          )}
        </Field>
    
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "background.primary",
            border: "1px solid",
            borderColor: "background.secondary",
            color: "background.secondary",
            textTransform: "capitalize",
            py: "5px",
            px: "15px",
            borderRadius: "5px",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "background.secondary",
              color: "text.primary",
            },
          }}
          fullWidth
        >
          Submit
        </Button>
      </Form>
    )}
    </Formik>)
}


if(props.loading === false)
return(
<Fade bool={true} in={true}>
<Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
  <CheckCircleIcon sx={{color:"white",fontSize:"200px",mb:"30px"}}/>
  <Typography sx={{color:"white",textAlign:"center"}} variant="h3">Message sent successfully</Typography>
</Box>
</Fade>
)


  
}
export default Contact;
