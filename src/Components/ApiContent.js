import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContent from "./CardContent";

export default function ApiContent() {
    const [photos, setPhotos] = useState({});
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                // console.log(response.data);
                setPhotos(response.data);
              
            })
            .catch(error => {
                console.log("error in the data", error);
            });
    }, []);
    return (

        <div className="container">
            {/* <button onClick={() => setPhotos('')}>Photo of the Day</button> */}

       
                
                
                <img src = {photos.hdurl} alt ="pics"/>

                <info
                 title = {photos.title}/>
                 <h2>{photos.date}</h2>
                 <p>{photos.explanation}</p>
                 <p>{photos.copyright}</p>
                 {/* copyright = {photos.copyright} */}
            {/* {console.log(photos)} */}
               

                

          
        </div>








    ) //(
    //     <div className="card">
    //         <cardContent
    //             title={info.title}
    //             desc={info.explanation}
    //             date={info.date}
    //         />
    //     </div>

}

