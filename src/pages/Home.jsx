import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/logo-unscreen.gif";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Details from "./characters/Details";
import Footer from "../components/Footer";

export default function Home({ data }) {
  const [showLoading, setShowLoading] = useState(true);
  const [dialog, showDialog] = useState(null);
  const [themeMode, setThemeMode] = useState("dark");

  // Load showDetails from localStorage if it exists, otherwise set it to null
  const [showDetails, setShowDetails] = useState(() => {
    const savedDetails = localStorage.getItem("showDetails");
    return savedDetails ? JSON.parse(savedDetails) : null;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
 
    if (showDetails) {
      localStorage.setItem("showDetails", JSON.stringify(showDetails));
    } else {
      localStorage.removeItem("showDetails");
    }
  }, [showDetails]);

  // Create the theme based on themeMode
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

  return (
    <ThemeProvider theme={theme}>
      <>
        {!showDetails ? (
          <>
            <main
              style={{
                display: showLoading ? "none" : "block",
                background: themeMode === "dark" ? "#111111" : "#f4f4f4",
                color: themeMode === "dark" ? "white" : "black",
              }}
            >
              <Navbar setThemeMode={setThemeMode} setShowDetails={setShowDetails} showDetails={showDetails} />

              {data.map((item) => (
                <div className="persona-container" key={item.id}>
                  <Link
                    onClick={() => {
                      setShowDetails(item);
                    }}
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

            {/* Loading animation */}
            {showLoading && (
              <div
                id="loading-animation"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={bg} alt="logo" style={{ mixBlendMode: "multiply" }} />
              </div>
            )}

            {/* Dialog for persona details */}
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
                <Button variant="contained" onClick={() => showDialog(null)}>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </>
        ) : (
          <>
            <div
              style={{
                background: themeMode === "dark" ? "#111111" : "#f4f4f4",
                color: themeMode === "dark" ? "white" : "black",
              }}
            >
              <Details data={showDetails} setThemeMode={setThemeMode} themeMode={themeMode} setShowDetails={setShowDetails} showDetails={showDetails} />
              <Footer data={data} setShowDetails={setShowDetails} />
            </div>
          </>
        )}
      </>
    </ThemeProvider>
  );
}
