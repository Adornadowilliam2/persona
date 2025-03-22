import React from "react";
import Navbar from "../../components/Navbar";

export default function Joker({ data }) {
  return (
    <>
    <Navbar />
      <section>
       <div id="background" >
       <div className="flexbox">
       <div className="pfp" >
          <img src={data[0].image} alt={data[0].name} title={data[0].name}/>
          
        </div>

        <p style={{background:'black', color:'white', padding:'10px'}}>{data[0].description}</p>
       </div>
       </div>
       <img src={data[0].gif} id="gif" />
      
      </section>
    </>
  );
}
