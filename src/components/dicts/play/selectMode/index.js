import React, { useState } from "react";
import ModeGroup from "Components/selectGroup";
export default function SelectMode(props) {
  const [mode, setMode] = useState();

  return (
    <div className="d-flex flex-column w-25 select-language justify-content-between display-center">
      <h1 className="font-weight-light text-center">Select mode</h1>

      <div className="d-flex mt-5 justify-content-between">
        <ModeGroup group={props.modes} active={mode} choose={(i) => setMode(props.modes[i])} color="accent" />
      </div>
      <button
        onClick={() => props.select(mode)}
        className={
          "btn btn-primary mt-5 px-4 py-1 align-self-end align-middle next " +
        (mode ? "" : "btn-gray disabled")
        }
      >
        next<i className="fas fa-angle-right ml-2"></i>
      </button>
    </div>
  );
}
