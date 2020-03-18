import React from "react";


function cardContent(props) {
    return (
        <li className="nasa-card" key={props.id}>
            <img>{props.img}</img>
            <h2>Today's Picture: {props.title}</h2>
            <p>{props.description}</p>
        </li>
    );
};

export default cardContent;