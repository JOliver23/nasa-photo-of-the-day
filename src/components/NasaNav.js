import React from "react";
import styled from "styled-components";
import { Linker, LinkCont, ContNav, Txter } from "./Styling";




const NasaNav = () => {
   return ( 
        <ContNav>
           <Txter type="date">APOD</Txter>
           <LinkCont>
             <Linker type="link" href="#">Home</Linker>
             <Linker type="link" href="#">Space</Linker>
             <Linker type="link" href="#">About</Linker>  
           </LinkCont>
       </ContNav> 
   )
};

export default NasaNav;