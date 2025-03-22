import React from "react";

export default function Skull({ data }) {
  return (
    <>
    <section>
     <div id="background" >
     <div className="flexbox">
     <div className="pfp" >
        <img src={data[1].image} alt={data[1].name} title={data[1].name} />
        
      </div>

      <p style={{background:'black', color:'white', padding:'10px'}}>{data[1].description}</p>
     </div>
     </div>
     <img src={data[1].gif} id="gif" />
    
    </section>
  </>
  );
}
