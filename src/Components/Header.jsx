/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useTheme } from "@emotion/react";
import Link from "@mui/material/Link";
import ListItem from '@mui/material/ListItem'
import List from "@mui/material/List";
import Drawer from '@mui/material/Drawer';


import CloseIcon from '@mui/icons-material/Close';





const pages = ["services", "skills", "projects", "certificates"];

function Header({scrollFunc,refs}) {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(true);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

 
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ bgcolor: "background.secondary",boxShadow:"none",pb:"100px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent:{xs:"space-between",sm:"space-evenly"},alignItems:"center"}}>
          {/* pc */}
          
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              cursor:"pointer",
              display: "flex",
              fontWeight: 500,
              fontSize:{xs:"2.3rem",sm:"2.3rem"},
              letterSpacing: ".3rem",
              color: "background.primary",
              textDecoration: "none",
            }}
          >
            @.
          </Typography>

          {/* mobile */}
          
        

          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="black"
              
            >
              <MenuIcon  sx={{fontSize:"1.8rem",color:"text.primary"}}/>
            </IconButton>
            <Drawer
            anchor="right"
            open={anchorElNav}
            onClose={handleCloseNavMenu}
           
            >






              <CloseIcon sx={{color:"text.primay",alignSelf:"flex-end",mt:"15px",fontSize:"35px",mr:"10px",cursor:"pointer",}} onClick={handleCloseNavMenu}/>
              <List sx={{width:"50vw"}}>

              {pages.map((page,i) => (
              <ListItem
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block",width:"auto"}}
              >
                 <Link sx={{cursor:"pointer",color: "text.primary",textTransform: "capitalize",'&:hover':{color:"background.primary"}}} onClick = {() => scrollFunc(refs[i]) }>{page}</Link>
              </ListItem>
            ))}







              </List>


              <Button
             onClick = {() => scrollFunc(refs[4])}
            sx={{
              display: { xs: "block", sm: "none" },
              bgcolor: "background.secondary",
              border: "1px solid",
              borderColor: "background.primary",
              color:"background.primary",
              textTransform: "capitalize",
              width:"90%",
              alignSelf: "center",
              py: "2px",
              px: "15px",
              borderRadius: "10px",
              transition:"0.3s",
              '&:hover':{
                backgroundColor:"background.primary",
                color:"text.secondary"
              }
            }}
          >
            <Typography  variant = "body 1"sx={{fontSize:{xs:"1.1rem"}}}>Hire me</Typography>
          </Button>


            </Drawer>

            
          </Box>

          {/* pc */}
          <Box sx={{display: { xs: "none", sm: "flex" } }}>
            {pages.map((page,i) => (
              <ListItem
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block",width:"auto"}}
              >
                 <Link sx={{cursor:"pointer",fontSize:"1.0rem",color: "text.primary",textTransform: "capitalize",'&:hover':{color:"background.primary"}}} onClick={() => scrollFunc(refs[i])}>{page}</Link>
              </ListItem>
            ))}
          </Box>

          {/* pc */}

          <Button
          onClick = {() => scrollFunc(refs[4])}
            sx={{
              display: { xs: "none", sm: "block" },
              bgcolor: "background.secondary",
              border: "1px solid",
              borderColor: "background.primary",
              color:"background.primary",
              textTransform: "capitalize",
              py: "2px",
              px: "15px",
              borderRadius: "10px",
              transition:"0.3s",
              '&:hover':{
                backgroundColor:"background.primary",
                color:"text.secondary"
              }
            }}
          >
            <Typography variant="body1" sx={{fontSize:"1.1rem"}}>Hire me</Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
