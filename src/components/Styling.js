import React from "react";
import styled from "styled-components";

export const APODCard = styled.div`
    width: 90vw;
    heigth: 100vh;
    margin: 1rem 5vw;
    background: radial-gradient(rgb(81, 18, 105),rgb(23, 136, 136), rgb(114, 31, 107) );
`;

export const Header = styled.h1`
    color: lavenderblush;
    background: linear-gradient(225deg, rgb(81, 18, 105),rgb(23, 136, 136));
`;

export const StyleImg = styled.img`
    max-width: 80vw;
    max-height: 60vh;
    border: 1rem double #4f4f4f;
    border-radius: 25%;
    background-color: thistle;
`;

export const InfoDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-start;
    background: lavender;
    border: .3rem dashed thistle;
    border-radius: 2%;
`;

export const Txter = styled.p`
    font-family: 'Baloo Bhaina 2', cursive;

    ${props => props.type ==="link" ? 'color: papayawhip; border: .2rem solid silver; border-radius: 23%;' : null}
    ${props => props.type ==="body" ? 'color: papayawhip; background: black; border: .1rem dotted white' : null}
    ${props => props.type === "date" ? 'border: .2rem double slategrey; background: linear-gradient(silver, white); font-size: large;' : null}
`;