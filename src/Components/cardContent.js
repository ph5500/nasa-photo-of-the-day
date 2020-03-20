import React from "react";




function CardContent(props) {
    return (
        <li className="nasa-card" key={props.id}>
            <img className="picture" src={props.hdurl} alt="random space pics"></img>
            <h2>Today's Picture: {props.title}</h2>
            <p>{props.explanation}</p>
        </li>
    );
};





export default CardContent;