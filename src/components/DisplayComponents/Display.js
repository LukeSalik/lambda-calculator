import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";

const Display = props => {
  return (
    <div className="display">
      {props.number /* Display any props data here */}
    </div>
  );
};
export default Display;
