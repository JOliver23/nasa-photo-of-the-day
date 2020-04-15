import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

function NasaGrid() {
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=w8hdXDR9Ec4cfAniaGULbZmBvWExFePzFkMbdCQs')
        .then(response => setNasaData(response.data))
        .catch(err => console.log('Error: ', err))
    }, []);

    return (
    <div className="container">
        <div className="data-holder">
            <button className="change-img">HD Image</button>
            <NasaCard title={nasaData.title} imgUrl={nasaData.url} description={nasaData.explanation} date={nasaData.date}/>

        </div>
    </div>

    )};

export default NasaGrid;