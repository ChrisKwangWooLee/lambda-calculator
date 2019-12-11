import React from "react";

const SpecialButton = (props) => {
  const {sp, index, specialHandler} = props;
  return (
    /* Display a button element rendering the data being passed down from the parent container on props */
      <button key={index} onClick={()=> specialHandler(sp)}> {sp} </button>
  );
};

export default SpecialButton;
