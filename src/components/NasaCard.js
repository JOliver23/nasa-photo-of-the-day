import React from "react";
import styled from "styled-components";
import StyledComponent from "./NasaGrid";
// import "./NasaCard.css";

const NasaCard = props => {
    const APODCard = styled.div`
        width: 90vw;
        margin: 1rem 5vw;
        background: radial-gradient(rgb(81, 18, 105),rgb(23, 136, 136), rgb(114, 31, 107) );
    `;

    return (
    <APODCard className="NasaCard">
        <CardTitle className="title">Title: <span className="name-style">{props.title}</span></CardTitle>
        <img className="daily-img" src={props.imgUrl} alt={props.title} />
        <div className="description">
            <p>Date: {props.date}</p>
            <p>What it is: {props.description}</p>
        </div>
    </APODCard>
    )
};

export default NasaCard;