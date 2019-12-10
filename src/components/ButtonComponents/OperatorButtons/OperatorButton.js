import React from "react";

const OperatorButton = (props) => {
  const {operator, index} = props;
  return (
  /* Display a button element rendering the data being passed down from the parent container on props */
      <button key={index}> {operator.value} </button>
  );
};

export default OperatorButton;
