import React from "react";
import { Link } from "react-router-dom";

export default function Hero({ id, name, image, info, publisher }) {
  return (
    <article className="superhero">
      <div className="img-container">
        <img src={image.url} alt={name} />
      </div>
      <div className="superhero-footer">
        <h3>{name}</h3>
        <h4>{publisher}</h4>
        <p>
          {info} {id}
        </p>
        <Link to={`/superhero/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  );
}
