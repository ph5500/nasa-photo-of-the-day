import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContent from "./CardContent";
import styled from "styled-components";

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

        <Container>
            {/* <button onClick={() => setPhotos('')}>Photo of the Day</button> */}

       
                
      
                <img src = {photos.hdurl} alt ="pics"/>
        <Body>
                <info
                 title = {photos.title}/>
                 <h2>{photos.date}</h2>
                 <p>{photos.explanation}</p>
                 <p>{photos.copyright}</p>
                 </Body>
                 {/* copyright = {photos.copyright} */}
            {/* {console.log(photos)} */}
               

                

          
        </Container>










    ) //(
    //     <div className="card">
    //         <cardContent
    //             title={info.title}
    //             desc={info.explanation}
    //             date={info.date}
    //         />
    //     </div>

}





const Container = styled.div`
background-color: #D8BFD8;
        color: white;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
       
        `;


        const Body = styled.body`

        border:solid black 40px;
        border-bottom-color:#ffe;
        border-left-color:#eed;
        border-right-color:#eed;
        border-top-color:#ccb;
        color: black;
        background-color: #808088;


`;
    

