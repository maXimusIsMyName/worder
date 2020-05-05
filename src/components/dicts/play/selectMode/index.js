import React, { useState } from "react";
import ModeGroup from "Components/selectGroup";
import Next from "Components/conditionBtn";
export default function SelectMode(props) {
  const [mode, setMode] = useState(props.mode);

  return (
    <div className="d-flex flex-column w-50 w-min-1 justify-content-between">
      <h1 className="font-weight-light text-center">Select mode</h1>

      <div className="d-flex mt-5 justify-content-between">
        <ModeGroup
          group={props.modes}
          active={mode}
          choose={(i) => setMode(props.modes[i])}
          color="accent"
        />
      </div>
      <div className="mt-5 align-self-end">
      <Next condition={mode} onClick={() => props.select(mode)}>
        next<i className="fas fa-angle-right ml-2"></i>
      </Next>
      </div>
    </div>
  );
}
