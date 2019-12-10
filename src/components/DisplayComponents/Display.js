import React from "react";

const Display = (props) => {
  const {displayMessage} = props;
  return <div className="display">{displayMessage}</div>;
};

export default Display;