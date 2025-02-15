import React from "react";

export default function Panther({ data }) {
  return (
    <>
      <section>
        <h1>{data[3].name}</h1>
        <div className="pfp">
          <img src={data[3].image} alt={data[3].name} />
        </div>
        <p>{data[3].description}</p>
        <img src={data[3].gif} alt="gif" />
        <h2>{`${data[3].alias}  Persona's`}</h2>
        <ul>
          {data[3].persona.map((item, index) => (
            <li key={`${index + 1}`}>
              <img src={item} alt={data[3].name} />
              {`${item
                .split("/")
                .pop()
                .replace(".png", "")
                .split("-")[0]
                .split("?")
                .shift()
                .toUpperCase()}`}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
