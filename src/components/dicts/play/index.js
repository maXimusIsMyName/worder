import React, { useEffect, useState, Suspense } from "react";
import { DictContext, words as getWords } from "Api/dictionary.js";
import { useParams } from "react-router-dom";
const SelectLanguage = React.lazy(() => import("./selectLanguage"));
export default function Play(props) {
  let { id } = useParams();
  useEffect(() => {
    getWords(id).then((words) => props.setWords(words));
  }, [id]);
  const [languageSettings, setLanguageSettings] = useState();
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
        ""
      )}
    </div>
  );
}
