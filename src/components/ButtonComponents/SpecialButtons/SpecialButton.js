import React from "react";

const SpecialButton = (props) => {
  const {sp, index} = props;
  return (
    /* Display a button element rendering the data being passed down from the parent container on props */
      <button key={index}> {sp} </button>
  );
};

export default SpecialButton;
