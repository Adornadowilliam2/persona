import React from "react";

export default function Mona({ data }) {
  return (
    <>
      <section>
        <h1>{data[2].name}</h1>
        <div className="pfp">
          <img src={data[2].image} alt={data[2].name} />
        </div>
        <p>{data[2].description}</p>
        <img src={data[2].gif} alt="gif" />
        <h2>{`${data[2].alias}  Persona's`}</h2>
        <ul>
          {data[2].persona.map((item, index) => (
            <li key={`${index + 1}`}>
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
