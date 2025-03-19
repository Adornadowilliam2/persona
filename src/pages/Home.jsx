import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import  bg  from "../assets/logo-unscreen.gif";

export default function Home({ data }) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000); 

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {data.map((item) => (
        <div className="persona-container" key={item.id}>
          <Link
            to={`/${item.alias}`}
            style={{
              textDecoration: "none",
              color: "black",
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
                border: "10px solid black",
                boxShadow: "0 0 10px black",
                margin: "10px",
              }}
            />
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
                <div key={persona.split("/").pop()}>
                  <div className="card">
                    <img
                      src={persona}
                      alt={item.name}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "contain",
                        borderRadius: "10px",
                        margin: "10px",
                      }}
                    />
                    <h1 className="persona-name">
                      Persona name:{" "}
                      {persona
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
          </Link>
        </div>
      ))}
      
    
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
    </>
  );
}
