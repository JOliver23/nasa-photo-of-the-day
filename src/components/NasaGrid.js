import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import NasaNav from "./NasaNav";

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
            <NasaNav />
            <NasaCard title={nasaData.title} imgUrl={nasaData.hdurl} description={nasaData.explanation} date={nasaData.date}/>

        </div>
    </div>

    )};

export default NasaGrid;