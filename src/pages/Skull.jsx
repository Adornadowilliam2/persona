import React from "react";
import { data } from "../index";
import Navbar from "../componets/Navbar";

export default function Skull() {
  return (
    <>
      <Navbar data={data} />
      <section>
        <h1>{data[1].name}</h1>
        <div className="pfp">
          <img src={data[1].image} alt={data[1].name} />
        </div>
        <p>{data[1].description}</p>
        <img src={data[1].gif} alt="gif" />
        <h2>{`${data[1].alias}  Persona's`}</h2>
        <ul>
          {data[1].persona.map((item, index) => (
            <li key={`${index + 1}`}>
              <img src={item} alt={data[1].name} />
              {`${item
                .split("/")
                .pop()
                .replace("n", "n ")
                .replace(".png", "")
                .split("-")[0]
                .toUpperCase()}`}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
