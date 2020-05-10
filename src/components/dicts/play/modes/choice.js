import React, { useState, useContext, useEffect } from "react";
import { DictContext } from "Api/dictionary";
import Next from "Components/conditionBtn";
import WordGroup from "Components/selectGroup";
export default function Choice(props) {
  const dict = useContext(DictContext);
  let words = dict.words;
  
  
  const [round, setRound] = useState(randomWords(words, 4));
  const [choosenWord, setChoosenWord] = useState();
  let group = round[0].map((w) => wordContent(w, props.langs.to))


  const next = () => {
  
    setRound(randomWords(words, 4));
    setChoosenWord("");
  };

  const choose = (word) => {
    let result = wordContent(round[1], props.langs.to) == word;
    //statistics.add(word, result) #TODO
    setChoosenWord(word);
  };

  return (
    <div className="d-flex align-items-center flex-column w-100">
      <h3 className="text-primary mb-3">
        {wordContent(round[1], props.langs.from)}
      </h3>
      <div className="line line-anim bg-secondary" />
      <div className="mt-3 flex-column align-items-center w-min-1 w-50 d-flex">
        <div className={"w-100 d-flex " + (choosenWord ? "disable" : "")}>
          <WordGroup
            choose={(i) => choose(group[i])}
            disable={
              choosenWord && choosenWord != wordContent(round[1], props.langs.to)
                ? choosenWord
                : ""
            }
            active={choosenWord ? wordContent(round[1], props.langs.to) : ""}
            color="success"
            group={group}
            disableColor="danger"
          ></WordGroup>
        </div>
        <div className="mt-5 align-self-end">
          <Next condition={choosenWord} onClick={next}>
            next<i className="fas fa-angle-right ml-2"></i>{" "}
          </Next>
        </div>
      </div>
    </div>
  );
}

function randomWords(dict, length) {
  let words = [];
  for (; words.length < length; ) {
    let w = Math.floor(Math.random() * Math.floor(dict.length));
    if (!words.includes(dict[w])) words.push(dict[w]);
  }

  
  return [words, words[Math.floor(Math.random() * Math.floor(length))]];
}
function wordContent(word, trans) {
  return word.translations.find((e) => e.name == trans).content;
}
