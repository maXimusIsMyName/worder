import React from "react";

export default function Btn(props) {
  return (
    <button
      onClick={() => (props.condition ? props.onClick() : "")}
      className={
        "btn btn-primary px-4 py-1 " +
        (props.condition ? "" : "btn-gray disabled shadow-none")
      }
    >
      {props.children}
    </button>
  );
}
