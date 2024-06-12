/* eslint-disable no-unused-vars */
import { createTheme } from "@mui/material";
import './App.css';

const Theme = createTheme({

palette:{
    background: {
        primary: "#6E07F3",
        secondary: "white",
    },
    text: {
        primary: "#141c3a",
        secondary: "white",
       
    },
    transition:{
      main:"3s"
    }
}

,



typography: {
  fontFamily: "Poppins",
h1: {
    fontWeight: 800,
    fontSize: '2.5rem',
    '@media (max-width:600px)': {
      fontSize: '2.2rem',
    }
  },
  h2: {
    fontWeight: 700,
    fontSize: '2.3rem',
    '@media (max-width:600px)': {
      fontSize: '2rem',
    }}

    ,h3:{
      fontWeight: 700,
      fontSize: '1.8rem',
      '@media (max-width:600px)': {
        fontSize: '1.6rem',
    }

  },
  body1: {
    fontWeight: 500,
    fontSize: '1rem',// 16px for detail page
     lineHeight:"1.6",
    '@media (max-width:600px)': {
      fontSize: '0.875rem',
    }
  },
  body2: {
    fontWeight: 500,
    lineHeight:"1.6",
    fontSize: '0.875rem', // 14px for homepage items
    '@media (max-width:600px)': {
      fontSize: '0.875rem',
    }
  },
}  

    
})




export default Theme