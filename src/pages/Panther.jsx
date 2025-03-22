import React from "react";

export default function Panther({ data }) {
  return (
    <>
    <section>
     <div id="background" >
     <div className="flexbox">
     <div className="pfp" >
        <img src={data[3].image} alt={data[3].name} title={data[3].name} style={{background:'white'}}/>
        
      </div>

      <p style={{background:'black', color:'white', padding:'10px'}}>{data[3].description}</p>
     </div>
     </div>
     <img src={data[3].gif} id="gif" />
    
    </section>
  </>
  );
}
