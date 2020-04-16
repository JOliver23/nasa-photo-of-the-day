import React from "react";
import styled from "styled-components";


const APODCard = styled.div`
    width: 90vw;
    margin: 1rem 5vw;
    background: radial-gradient(rgb(81, 18, 105),rgb(23, 136, 136), rgb(114, 31, 107) );

    ${props => (props.type === "APOD" ? `color : gold` : null)}
`;

export default APODCard;