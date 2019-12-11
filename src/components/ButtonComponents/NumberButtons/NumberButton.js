import React from "react";

const NumberButton = (props) => {
  const {number, index, updateCalc} = props;
  return (    
  /* Display a button element rendering the data being passed down from the parent container on props */
        <button className={`number${number}`} key={index} onClick={() => updateCalc(number)}> {number} </button>
  );
};

export default NumberButton;