import React, { useContext, useState } from "react";
import { DictContext } from "Api/dictionary";
import Next from "Components/conditionBtn";
export default function Learn(props) {
  const dict = useContext(DictContext);
  let words = dict.words;
  const [word, setWord] = useState(0);
  const next = () => (word + 1 < words.length ? setWord(word + 1) : setWord(0));
  return (
    <div className="d-flex align-items-center  flex-column w-100">
      
      <span className="text-info word mb-3">
        {
          words[word].translations.find((e) => e.name == props.langs.from)
            .content
        }
      </span>
      <div className="line line-anim bg-secondary" />
      <span className="text-info word mt-3">
        {words[word].translations.find((e) => e.name == props.langs.to).content}
      </span>
     
      <div className="mt-5 align-self-end">
        <Next condition={true} onClick={next}>
          {" "}
          next<i className="fas fa-angle-right ml-2"></i>{" "}
        </Next>
      </div>
    </div>
  );
}
