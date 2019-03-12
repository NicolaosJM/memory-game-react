import React from "react";
import "../styles/Cards.css";

const Cards = ({changeClickedState, name, image, id}) => (
        <div className="card">
            <div className="img-container">
                <img alt={name} src={image} onClick={() => changeClickedState(id)}/>
            </div>
        </div>
)

export default Cards;