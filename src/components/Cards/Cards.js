import React from "react";
import "./Cards.css";

const Cards = props => {
  return (
  <div className="card">
    <div className="img-container">
      <img 
      alt="Coffee" 
      src={'/images/' + props.image}
      onClick={() => props.clickHistory(props.id, props.clicked)}
       />
    </div>
  </div>
  )
};

export default Cards;