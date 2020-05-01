import React, { useEffect, useState, Suspense } from "react";
import { words as getWords } from "Api/dictionary.js";
import { useParams } from "react-router-dom";
const SelectLanguage = React.lazy(() => import("./selectLanguage"));
const SelectMode = React.lazy(() => import("./selectMode"));
const PlayMode = React.lazy(() => import("./modes"));
let [languageSettings, mode] = [{ from: "", to: "" }, ""];
export default function Play(props) {
  let { id } = useParams();
  useEffect(() => {
    getWords(id).then((words) => props.setWords(words));
  }, [id]);

  const [step, setStep] = useState(0);
  return (
    <div className="d-flex bg-light pb-3 w-50 flex-column display-center min-2 " >
      <Header
        step={step}
        back={() => (step > 0 ? setStep(step - 1) : history.back())}
      />
      <div className="mt-4 px-2 w-100 d-flex flex-column position-relativ min-1 align-items-center">
        {step == 0 ? (
          <Suspense fallback={<></>}>
            <SelectLanguage
              from={languageSettings.from}
              to={languageSettings.to}
              select={(s) => {
                languageSettings = s;
                setStep(step + 1);
              }}
            ></SelectLanguage>
          </Suspense>
        ) : step == 1 ? (
          <Suspense fallback={<></>}>
            <SelectMode
              mode={mode}
              select={(m) => {
                mode = m;
                setStep(step + 1);
              }}
              modes={["learn", "choice"]}
            />
          </Suspense>
        ) : (
          <Suspense fallback={<></>}>
            <PlayMode mode={mode} langSettings={languageSettings} />
          </Suspense>
        )}
      </div>
    </div>
  );
}

function Header(props) {
  const steps = ["Language choose", "Mode choose", "Play"];
  return (
    <div className="card-header rounded-top bg-secondary text-light w-100 d-dlex align-items-center">
      <button
        className="shadow-none btn-dark btn bg-transparent border-0 border-transparent py-0 ml-2 mr-4"
        onClick={() => props.back()}
      >
        <i className="fas fa-backward "></i>
      </button>
      <span style={{ fontWeight: 300, fontSize: "1.25rem" }}>
        {steps[props.step]}
      </span>
    </div>
  );
}
