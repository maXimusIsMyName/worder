import React, { useState, useEffect } from "react";
import Card from "../card";
export default function List(props) {
  const [dicts, setDicts] = useState([]);
  useEffect(() => {
    props.dicts().then(
      (details) => {
        details.forEach((promise) => {
          promise.then((dict) => setDicts([...dicts, dict]));
        });
      },
      (error) => {
        throw error;
      }
    );
  }, []);

  return (
    <div className="container-fluid justify-content-between d-flex flex-wrap p-0 ">
      {dicts.map((dict, i) => (
        <React.Fragment key={i}>
          <Card dict={dict} choose={props.choose} />
          {(i + 1) % 4 == 0 ? <div className="w-100 d-none d-md-block" /> : ""}
          {(i + 1) % 2 == 0 ? <div className="w-100 d-md-none" /> : ""}
        </React.Fragment>
      ))}
    </div>
  );
}
