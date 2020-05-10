import React from "react";
import './selectGroup.scss'
export default function Group(props) {
 
  
  return (
    <div className="d-flex w-100 flex-column mx-3">
      {props.group.map((e, i, a) => (
        <div
          key={e}
          className={
            (e == props.disable ? " disable bg-" + (props.disableColor ? props.disableColor + " " : "gray ") : "")  +
            (i == 0 ? "top " : "") +
            (i == a.length - 1 ? "bottom " : " ") +
            "border rounded-0 btn text-center py-1  " +
            (e == props.active && e != props.disable
              ? "bg-" + props.color + " border-" + props.color + " text-light"
              : "")
          }
          onClick={() => {
            props.choose(i);
          }}
        >
          <span className="item">{e}</span>
        </div>
      ))}
    </div>
  );
}
