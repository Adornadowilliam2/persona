import React, { useState } from 'react';
import Navbar from '../../components/Navbar';


export default function Details({ data, setThemeMode, setShowDetails, showDetails }) {

  return (
    <div >
        <Navbar setThemeMode={setThemeMode} setShowDetails={setShowDetails} showDetails={showDetails} />
        <section >
        <div id="background" >
          <div className="flexbox">
            <div className="pfp" >
              <img src={data.image} alt={data.name} title={data.name}/>



            </div>


          </div>
        </div>
        <p style={{
          textShadow: "2px 2px 4px rgb(245, 248, 233)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "5px"
        }}>
          {data.description}
        </p>
        <img src={data.gif} id="gif" alt="gif" />
      </section>
    
    </div>
  );
}