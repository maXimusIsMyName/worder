import React, { useState } from "react";
import LanguageGroup from "Components/selectGroup";
import { DictContext } from "Api/dictionary";
import Next from "Components/conditionBtn";
export default function SelectLanguage(props) {
  const [fromLanguage, setFromLanguage] = useState(props.from);
  const [toLanguage, setToLanguage] = useState(props.to);
  const choose = (i, set, l, langs) => {
    if (langs[i] == l) set[1](langs[i + 1 < langs.length ? i + 1 : 0]);
    set[0](langs[i]);
  };

  return (
    <div className="d-flex flex-column w-75 w-min-1 justify-content-between">
      <h1 className="font-weight-light text-center">Select language</h1>

      <DictContext.Consumer>
        {(dict) => {
          return (
            <div className="d-flex mt-5 justify-content-between">
              <LanguageGroup
                group={dict.details.languages}
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
                group={dict.details.languages}
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
      <div className="mt-5 align-self-end">
      <Next
        condition={fromLanguage && toLanguage}
        onClick={() => props.select({ from: fromLanguage, to: toLanguage })}
      >
        next<i className="fas fa-angle-right ml-2"></i>
      </Next>
      </div>
    </div>
  );
}