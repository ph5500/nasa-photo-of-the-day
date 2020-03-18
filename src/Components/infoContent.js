import React, { useState, useEffect } from "react";
import axios from "axios";
import cardContent from "./cardContent";

export default function infoContent() {
    const [photos, setPhotos] = useState();
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`)
            .then(response => {
                console.log(response.data);
                setInfo(response.data);
            })
            .catch(error => {
                console.log("error in the data", error);
            })
    }, []);
    return (
        <div className="card">
            <cardContent
                title={info.title}
                desc={info.explanation}
                date={info.date}
            />
        </div>
    )
};
export default infoContent;
