import React from "react";
import { data } from "../index";
import Navbar from "../componets/Navbar";

export default function Joker() {
  return (
    <>
      <Navbar data={data} />
      <section>
        <h1>{data[0].name}</h1>
        <div className="pfp">
          <img src={data[0].image} alt={data[0].name} />
        </div>
        <p>{data[0].description}</p>
        <img src={data[0].gif} alt="gif" />
        <h2>{`${data[0].alias}  Persona's`}</h2>
        <ul>
          {data[0].persona.map((item) => (
            <li key={item.id}>
              <img src={item} alt={data[0].name} />
              {`${item.split("/").pop().replace(".png", "").toUpperCase()}`}
            </li>
          ))}
          <li>And More</li>
        </ul>
      </section>
    </>
  );
}
