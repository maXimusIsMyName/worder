import React from 'react'
import './selectGroup.scss'
export default function Group(props) {
    return (
      <div className="d-flex flex-column w-40">
        {props.group.map((e, i, a) => (
          <div
            key={e}
            className={
              (e == props.disable ? " disable bg-gray " : "") +
              "border rounded-0 btn text-center py-1 " +
              (i == 0 ? "top " : "") +
              (i == a.length - 1 ? "bottom " : "") +
              (e == props.active && e != props.disable
                ? "bg-" + props.color + " border-" + props.color + " text-light"
                : "")
            }
            onClick={() => {
              props.choose(i);
            }}
          >
            <span className="language">{e}</span>
          </div>
        ))}
      </div>
    );
  }
  