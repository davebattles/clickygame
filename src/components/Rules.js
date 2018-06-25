import React from 'react';

const RulesStyle = {
  fontSize: 14
}




const Rules = () => (
  <div className="rulesGoHere">
  <h3 className="rulesBody" style={RulesStyle}>
    Click any images making sure not to click the same image twice.
    Repeating an image will reset your score and clear click history.
  </h3>
  </div>
)

export default Rules;