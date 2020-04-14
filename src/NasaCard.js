import React, { useState } from "react";

const NasaCard = () => {
    const [imgUrl, setImage] = useSate("image url");

    return (
    <div className="NasaCard">
        <img className="daily-img" src={imgUrl} alt="img-url-alt"></img>
        <div className="description">
            <p></p>
            <button className="change-img" onClick={() => setImage()}>Next Image</button>
        </div>
    </div>
    )
};

export default NasaCard;