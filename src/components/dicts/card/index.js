import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
export default function Card(props) {
  let { url, path } = useRouteMatch();

  return (
    <div
      className="card  mx-2 my-1  bg-light "
      style={{ width: "18rem", minWidth: "20%" }}
    >
      <h2 className="card-header">{props.dict.name}</h2>

      <div className="d-flex flex-column mx-4 my-2 flex-nowrap">
        <p className="card-text my-1">{props.dict.description}</p>
        <div className="d-flex flex-column mt-2 flex-nowrap">
          <p className="bold card-text my-1">Languges available: </p>
          <div className="d-flex w-100">
            {props.dict.languages.map((l, i) => (
              <span
                key={i}
                className="bg-secondary text-light rounded-pill mr-1 px-3 py-1"
                style={{ fontWeight: "300" }}
              >
                {l}
              </span>
            ))}{" "}
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-between align-items-center">
          <Link
            to={`${url}/play/${props.dict.id}`}
            className="btn text-light card-link bg-primary"
          >
            Play<i className="fas fa-play-circle ml-2"></i>
          </Link>
          <Link
            to={`${url}/details/${props.dict.id}`}
            className="card-link text-secondary mr-4"
          >
            Details<i className="fas fa-info-circle ml-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
