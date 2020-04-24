import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
export default function Card(props) {
  let { url, path } = useRouteMatch();

  return (
    <div
      className="card  mx-2 my-1 pb-1 bg-light border-0"
      style={{ minWidth: "20%", maxWidth: "20rem" }}
    >
      <h2 className="font-weight-light text-capitalize card-header text-light bg-accent">{props.dict.name}</h2>

      <div className="d-flex flex-column mx-4 my-2 flex-nowrap">
        <p className="card-text my-1">{props.dict.description}</p>
        <div className="d-flex flex-column mt-2 flex-nowrap">
          <p className="bold card-text my-1">Languges available: </p>
          <div className="d-flex w-100 my-1 align-items-center">
            {props.dict.languages.map((l, i) => (
              <span
                key={i}
                className="border border-info align-middle text-info rounded-pill mr-1 px-3 py-1"
              >
                {l}
              </span>
            ))}{" "}
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-between align-items-center">
          <Link
            to={`${url}/play/${props.dict.id}`}
            className="btn px-3 btn-primary"
            onClick={() => {
              props.choose(props.dict);
            }}
          >
            Play<i className="fas fa-play-circle ml-2"></i>
          </Link>
          <Link
            to={`${url}/details/${props.dict.id}`}
            className="card-link text-accent mr-4"
            onClick={() => {
              props.choose(props.dict);
            }}
          >
            Details<i className="fas fa-info-circle ml-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
