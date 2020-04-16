import React from "react";

const NasaNav = () => {
   return ( 
        <div className="nav">
           <img src="nav" alt="nasa-logo"></img>
           <nav className="nav-links">
             <span>Home</span>
             <span>Space</span>
             <span>About</span>  
           </nav>
       </div> 
   )
};

export default NasaNav;