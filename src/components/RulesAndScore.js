import React from 'react';


const RulesStyle = {
  fontSize: 25,
  padding: 0,
  fontFamily: "Raleway",
  position: "absolute",
  top: 5,
  right: 5,
  color: "#fff"
}


const Fix = {
  width: "100%",
  height: 0,
  margin: 0,
  padding: 0
}



const Rules = props => (
  <div style={Fix} className="rulesGoHere">
 
  <h3 className="rulesBody" style={RulesStyle}>
    {props.message}
  </h3>
  <br/>
  <span style={RulesStyle}>
      <span>Score: {props.score}</span>
      <span>   |    </span>
      <span>High Score: {props.highScore}</span>
    </span>
  </div>
)

export default Rules;