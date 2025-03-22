import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/logo-unscreen.gif";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, useTheme, createTheme, ThemeProvider } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";


export default function Navbar({ data }) {

   const [themeMode, setThemeMode] = useState("dark"); 
    const theme = createTheme({
       palette: {
         mode: themeMode,
         ...(themeMode === "light" && {
           background: {
             default: "#f4f4f4",
           },
           text: {
             primary: "#000000",
           },
         }),
       },
     });
   
   
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={theme}>
    <div
      style={{
        display: "flex",
        background: "#fb0401",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <img
        src={bg}
        alt="logo"
        style={{ width: "100px", mixBlendMode: "multiply" }}
      />
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "white",
          padding: "10px",
          fontSize: "15px",
        }}
      >
        <li><Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link></li>
        <li><Link to="/features" style={{ textDecoration: "none", color: "black" }}>Features</Link></li>

        <li><Link to="/contact" style={{ textDecoration: "none", color: "black" }} >Contact</Link></li>
      </ul>

      {/* Theme Toggle Button */}
      <IconButton
        color="inherit"
        onClick={toggleTheme}
        style={{ marginLeft: "auto" }}
      >
        {themeMode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </div>
    </ThemeProvider>
  );
}
