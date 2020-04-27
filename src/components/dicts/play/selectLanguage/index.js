import React, { useState } from "react";
import { DictContext } from "Api/dictionary";
import "./SelectLanguage.scss";
export default function SelectLanguage(props) {
  const [fromLanguage, setFromLanguage] = useState();
  const [toLanguage, setToLanguage] = useState();
  const choose = (i, set, l, langs) => {
    if (langs[i] == l) set[1](langs[i + 1 < langs.length ? i + 1 : 0]);
    set[0](langs[i]);
  };

  return (
    <div className="d-flex flex-column w-40 select-language justify-content-between display-center">
      <h1 className="font-weight-light text-center">Select language</h1>

      <DictContext.Consumer>
        {(dict) => {
          return (
            <div className="d-flex mt-5 justify-content-between">
              <LanguageGroup
                langs={dict.details.languages}
                active={fromLanguage}
                disable={toLanguage}
                choose={(l) =>
                  choose(
                    l,
                    [setFromLanguage, setToLanguage],
                    toLanguage,
                    dict.details.languages
                  )
                }
                color="accent"
              />
              <LanguageGroup
                langs={dict.details.languages}
                disable={fromLanguage}
                active={toLanguage}
                color="secondary"
                choose={(l) =>
                  choose(
                    l,
                    [setToLanguage, setFromLanguage],
                    fromLanguage,
                    dict.details.languages
                  )
                }
              />
            </div>
          );
        }}
      </DictContext.Consumer>
      <button
        onClick={() => props.select({ from: fromLanguage, to: toLanguage })}
        className={
          "btn btn-primary mt-5 px-4 py-1 align-self-end align-middle next " +
          (fromLanguage && toLanguage ? "" : "btn-gray disabled")
        }
      >
        next<i className="fas fa-angle-right ml-2"></i>
      </button>
    </div>
  );
}
function LanguageGroup(props) {
  return (
    <div className="d-flex flex-column w-40">
      {props.langs.map((e, i, a) => (
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
