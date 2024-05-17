import React from "react";

const Commonbtn = (props) => {
  return (
    <div className="comonbtn-border z-1">
      <button className=" fw-bold fs-14 lh-14 ff-Eurostile comonbtn position-relative z-0">
        {props.name}
      </button>
    </div>
  );
};
export default Commonbtn;
