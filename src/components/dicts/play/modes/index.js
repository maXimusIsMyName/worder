import React, { useState, Suspense } from "react";
import './modes.scss'
const Choice = React.lazy(() => import("./choice"));
const Learn = React.lazy(() => import("./learn"));
export default function PlayModes(props) {
  return (
    <div className="d-flex flex-column align-items-center w-100">
      <h1 className="font-weight-light text-center text-capitalize">{props.mode}</h1>
      <div className="w-100 mt-4">
        {props.mode == "choice" ? (
          <Suspense fallback={<></>}>
            <Choice langs={props.langSettings} />
          </Suspense>
        ) : (
          <Suspense fallback={<></>}>
            <Learn langs={props.langSettings} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
