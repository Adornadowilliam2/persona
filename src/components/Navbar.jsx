import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import bg from "../assets/logo-unscreen.gif";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ setThemeMode, themeMode,  setShowDetails,showDetails }) {
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const navigate = useNavigate();

  const handleHomeClick = () => {
    localStorage.removeItem("showDetails");
    setShowDetails(!showDetails);
    navigate('/');
  };


  return (
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
        <li><Link   onClick={(e) => {
          e.preventDefault(); 
          handleHomeClick();  
        }} style={{ textDecoration: "none", color: "black" }}>Home</Link></li>
        <li><Link to="/features" style={{ textDecoration: "none", color: "black" }}>Features</Link></li>
        <li><Link to="/contact" style={{ textDecoration: "none", color: "black" }}>Contact</Link></li>
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
  );
}
