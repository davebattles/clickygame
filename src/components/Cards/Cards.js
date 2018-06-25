import React from "react";
import "./Cards.css";

const Cards = props => (
  <div className="card">
    <div className="img-container">
      <img src={props.image} alt=""/>
    </div>
  </div>
);

export default Cards;