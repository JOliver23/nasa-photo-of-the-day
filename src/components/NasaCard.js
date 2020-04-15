import React from "react";
import "./NasaCard.css";

const NasaCard = props => {

    return (
    <div className="NasaCard">
        <h1 className="title">Title: <span className="name-style">{props.title}</span></h1>
        <img className="daily-img" src={props.imgUrl} alt={props.title} />
        <div className="description">
            <p>Date: {props.date}</p>
            <p>What it is: {props.description}</p>
        </div>
    </div>
    )
};

export default NasaCard;