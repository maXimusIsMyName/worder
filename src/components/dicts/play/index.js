import React, { useEffect, useState, Suspense } from "react";
import { DictContext, words as getWords } from "Api/dictionary.js";
import { useParams } from "react-router-dom";
const SelectLanguage = React.lazy(() => import("./selectLanguage"));
const SelectMode = React.lazy(() => import("./selectMode"));
export default function Play(props) {
  let { id } = useParams();
  useEffect(() => {
    getWords(id).then((words) => props.setWords(words));
  }, [id]);
  const [languageSettings, setLanguageSettings] = useState();
  const [mode, setMode] = useState();
  return (
    <div className="">
      {!languageSettings ? (
        <Suspense fallback={<></>}>
          <SelectLanguage
            select={(s) => {
              setLanguageSettings(s);
            }}
          >
 
          </SelectLanguage>
        </Suspense>
      ) : (
       !mode ? (<Suspense fallback={<></>}>
         <SelectMode select={m => setMode(m)} modes={["regular","special"]}/>
       </Suspense>
      ) : "")}
    </div>
  );
}
