import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

function NasaGrid() {
    const [nasaData, setNasaData] = useState([]);
    const [unknown,setUnknown] = useState("stars");

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=w8hdXDR9Ec4cfAniaGULbZmBvWExFePzFkMbdCQs')
        .then(response => console.log(response))
        .catch(err => console.log('Error: ', err))
    }, []);

    return (
    <div className="container">
        <div className="data-holder">


        </div>
    </div>

    )};

export default NasaGrid;