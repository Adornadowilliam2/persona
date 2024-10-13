import React from "react";

export default function Joker({ data }) {
  return (
    <>
      <section>
        <h1>{data[0].name}</h1>
        <div className="pfp">
          <img src={data[0].image} alt={data[0].name} />
        </div>
        <p>{data[0].description}</p>
        <img src={data[0].gif} alt="gif" />
        <h2>{`${data[0].alias}  Persona's`}</h2>
        <ul>
          {data[0].persona.map((item, index) => (
            <li key={`${item.id + index + 1}`}>
              {console.log(`${index + 1}`)}
              <img src={item} alt={data[0].name} />
              {`${item
                .split("/")
                .pop()
                .replace("%20", " ")
                .replace(".png", "")
                .split("?")
                .shift()
                .split("-")[0]
                .toUpperCase()}`}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
