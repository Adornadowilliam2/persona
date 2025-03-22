
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/logo-unscreen.gif";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, useTheme, createTheme, ThemeProvider } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";


export default function Home({ data }) {
  const [showLoading, setShowLoading] = useState(true);
  const [themeMode, setThemeMode] = useState("dark"); // Default is dark mode

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const [dialog, showDialog] = useState(null);


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

  // Toggle the theme mode
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={theme}>
      <main
        style={{
          display: showLoading ? "none" : "block",
          background: themeMode === "dark" ? "#111111" : "#f4f4f4",
          color: themeMode === "dark" ? "white" : "black",
        }}
      >
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
            <li>Home</li>
            <li>Features</li>
            <li>Contact</li>
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

        {data.map((item) => (
          <div className="persona-container" key={item.id}>
            <Link
              to={`/${item.alias}`}
              style={{
                textDecoration: "none",
                color: themeMode === "dark" ? "white" : "black",
              }}
            >
              <img
                src={item.pfp}
                alt={item.name}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                  background: "red",
                  borderRadius: "10px",
                  border: `10px solid ${themeMode === "dark" ? "#ccc" : "black"}`,
                  boxShadow: "0 0 10px black",
                  margin: "10px",
                }}
              />
            </Link>
            <div className="context">
              <h1>
                <span style={{ color: "red" }}>Name: </span> {item.name}
              </h1>
              <h1>
                <span style={{ color: "red" }}>Alias: </span>
                {item.alias}
              </h1>
            </div>
            <main className="card-container">
              {item.persona.map((persona) => (
                <div key={persona.persona_name.split("/").pop()}>
                  <div className="card" onClick={() => showDialog(persona)}>
                    <img
                      src={persona.persona_name}
                      alt={item.name}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "contain",
                        borderRadius: "10px",
                        margin: "10px",
                      }}
                    />
                    <h1 className="persona-name" style={{ color: "black" }}>
                      Persona name:{" "}
                      {persona.persona_name
                        .split("/")
                        .pop()
                        .split(".")[0]
                        .split("-")[0]
                        .replace("%20", " ")}
                    </h1>
                  </div>
                </div>
              ))}
            </main>
          </div>
        ))}
      </main>

      {showLoading && (
        <div
          id="loading-animation"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={bg}
            alt="logo"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      )}

      <Dialog open={!!dialog}>
        <DialogTitle className="persona-name">
          {dialog?.persona_name
            .split("/")
            .pop()
            .split(".")[0]
            .split("-")[0]
            .replace("%20", " ")}
        </DialogTitle>
        <DialogContent>
          <img
            src={dialog?.persona_name}
            alt="persona character"
            style={{ width: "100px", height: "100px" }}
          />
          <p>{dialog?.description}</p>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => showDialog(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
