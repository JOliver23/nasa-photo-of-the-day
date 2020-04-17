import React from "react";
import styled from "styled-components";
import { APODCard, Header, StyleImg, InfoDiv, Txter }from "./Styling";

// import "./NasaCard.css";

const NasaCard = props => {

    return (
    <APODCard type="APOD">
        <Header className="title">Nasa Photo of the Day: <Txter>{props.title}</Txter></Header>
        <StyleImg className="daily-img" src={props.imgUrl} alt={props.title} />
        <InfoDiv>
            <Txter type="date">Date: {props.date}</Txter>
            <Txter type="body">What it is: {props.description}</Txter>
        </InfoDiv>
    </APODCard>
    )
};

export default NasaCard;