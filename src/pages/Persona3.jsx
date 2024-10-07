import React from "react";
import { data, user } from "../index";
import Navbar from "../componets/Navbar";
export default function Persona3() {
  return (
    <>
      <Navbar data={data} />
      <h1
        style={{
          textAlign: "center",
          margin: "0 0 10px 0",
          fontSize: "50px",
        }}
      >
        Persona 3 Characters
      </h1>
      <div className="card-container">
        {user.map((item) => (
          <div
            key={item.id}
            className="card"
            style={{ border: "aqua 10px solid" }}
          >
            <h1>{item.name}</h1>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "300px", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
