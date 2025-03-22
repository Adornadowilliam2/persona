import React from "react";

export default function Mona({ data }) {
  return (
    <>
    <section>
     <div id="background" >
     <div className="flexbox">
     <div className="pfp" >
        <img src={data[2].image} alt={data[2].name} title={data[2].name}/>
        
      </div>

      <p style={{background:'black', color:'white', padding:'10px'}}>{data[2].description}</p>
     </div>
     </div>
     <img src={data[2].gif} style={{width:'400px', display:'block', margin:'10px auto'}} />
    
    </section>
  </>
  );
}
