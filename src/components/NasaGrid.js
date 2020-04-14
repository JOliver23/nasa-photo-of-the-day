import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

function NasaGrid() {
    const [nasaData, setNasaData] = useState([]);
    const [imgUrl,setImgUrl] = useState("stars");

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=w8hdXDR9Ec4cfAniaGULbZmBvWExFePzFkMbdCQs')
        .then(response => setNasaData(response.data))
        .catch(err => console.log('Error: ', err))
    }, []);

    return (
    <div className="container">
        <div className="data-holder">
            <button className="change-img" onClick={() => setImgUrl("comet")}>Next Image</button>
            <NasaCard title={nasaData.title} imgUrl={nasaData.hdurl} description={nasaData.explanation} date={nasaData.date}/>
            {/* {nasaData.map(object => (
                <NasaCard key={object.date} imgUrl={object.url} description={object.explanation} />
            ))} */}

        </div>
    </div>

    )};

export default NasaGrid;