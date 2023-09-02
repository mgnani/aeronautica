import {
  Button,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  ListItemIcon,
  Box,
} from "@mui/material";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineIdentification } from "react-icons/hi";
import { BiNews } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";

import NavListDrawer from "./navListDrawer";
import image from "../../assets/logo.png";

const Navbar = () => {
  /* ------------------- estilos de los elementos ------------------- */

  const appBarStyle = {
    backgroundColor: "rgba(255, 255, 255, 0)",
    boxShadow: "none",
    display: "flex",
    minHeight: "0",
    width: "100%",
    marginTop: "10px",
    position: "absolute", // Cambia 'your-color-here' al color que desees
    padding: "0",
  };

  const buttonStyle = {
    minWidth: "100px",
    marginRight: "10px",
  };

  const buttonLargeStyle = {
    minWidth: "200px",
    margin: "10px",
  };

  const buttonBorderStyle = {
    minWidth: "130px",
    marginRight: "10px",
    border: "solid black 1px",
  };

  /* ------------------------------------------------------------------- */

  const navLinks = [
    {
      title: "Novedades",
      path: "#novedades",
      style: buttonStyle,
      icon: <BiNews style={{ fontSize: "20px" }} />,
    },
    {
      title: "Sobre nosotros",
      path: "#nosotros",
      style: buttonLargeStyle,
      icon: <FcAbout style={{ fontSize: "20px" }} />,
    },
    {
      title: "Afiliarse",
      path: "#afiliarse",
      style: buttonBorderStyle,
      icon: <HiOutlineIdentification style={{ fontSize: "20px" }} />,
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar style={appBarStyle}>
        {/* -------------- */}
        <img
          src={image}
          alt="logo de la institución"
          style={{
            width: "80px",
            height: "80px",
            margin: "1% 5%",
            position: "absolute",
            zIndex: "1",
          }}
        />
        {/* ------------ */}
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
            minHeight: "40px",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <IconButton
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
          >
            <FiMenu
              style={{
                fontSize: "35px",
                color: "#ffff",
                border: "solid 1px #ffff",
                padding: "2px",
                margin: "2px",
                borderRadius: "3px",
              }}
            />
          </IconButton>

          <div className="parte2">
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navLinks.map((item) => (
                <Button key={item.title} style={item.style}>
                  <ListItemIcon
                    style={{
                      minWidth: "30px",
                      margin: "0px",
                      color: "#0a2273",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>{" "}
                  {item.title}
                </Button>
              ))}
            </Box>
          </div>
        </Toolbar>
        {/* <div
          style={{
            width: "300px",
            height: "300px",
            position: "absolute",
            backgroundImage: "url(../../assets/logo.png)",
            zIndex: "100",
          }}
        ></div> */}
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};

export default Navbar;
