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

import { Link } from "react-router-dom";

import NavListDrawer from "./navListDrawer";
import image from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  /* ------------------- estilos de los elementos ------------------- */

  const appBarStyle = {
    backgroundColor: "rgb(10, 30, 103",
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
    color: "#ffff",
    fontSize: "17px",
  };

  const buttonLargeStyle = {
    minWidth: "200px",
    margin: "10px",
    color: "#ffff",
    fontSize: "17px",
  };

  const buttonBorderStyle = {
    minWidth: "130px",
    marginRight: "10px",
    border: "solid #ffff 1px",
    color: "#ffff",
    fontSize: "17px",
  };

  /* ------------------------------------------------------------------- */

  const navLinks = [
    {
      title: "Historia",
      path: "/historia",
      style: buttonStyle,
      icon: <BiNews style={{ fontSize: "20px" }} />,
    },
    {
      title: "Comision directiva",
      path: "/comision",
      style: buttonLargeStyle,
      icon: <FcAbout style={{ fontSize: "20px" }} />,
    },
    {
      title: "Afiliarse",
      path: "/afiliarse",
      style: buttonBorderStyle,
      icon: <HiOutlineIdentification style={{ fontSize: "20px" }} />,
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar style={appBarStyle}>
        {/* -------------- */}
        <Link to="/">
          <img src={image} alt="logo de la institución" className="logo" />
        </Link>
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
                <Link to={item.path} key={item.title}>
                  {/* Agrega el componente Link */}
                  <Button style={item.style}>
                    <ListItemIcon
                      style={{
                        minWidth: "30px",
                        margin: "0px",
                        color: "#ffff",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>{" "}
                    {item.title}
                  </Button>
                </Link>
              ))}
            </Box>
          </div>
        </Toolbar>
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
