import React from "react";
import { data } from "../index";
import Navbar from "../componets/Navbar";

export default function Mona() {
  return (
    <>
      <Navbar data={data} />
      <section>
        <h1>{data[2].name}</h1>
        <div className="pfp">
          <img src={data[2].image} alt={data[2].name} />
        </div>
        <p>{data[2].description}</p>
        <img src={data[2].gif} alt="gif" />
        <h2>{`${data[2].alias}  Persona's`}</h2>
        <ul>
          {data[2].persona.map((item) => (
            <li key={item.id}>
              <img src={item} alt={data[2].name} />
              {`${item
                .split("/")
                .pop()
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
