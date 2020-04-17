import React from "react";
import styled from "styled-components";
import { Txter } from "./Styling";

const ContNav = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
`;


const NasaNav = () => {
   return ( 
        <ContNav>
           <img src="./img/logo192.png" alt="react-logo"></img>
           <div className="nav-links">
             <Txter type="link">Home</Txter>
             <Txter type="link">Space</Txter>
             <Txter type="link">About</Txter>  
           </div>
       </ContNav> 
   )
};

export default NasaNav;