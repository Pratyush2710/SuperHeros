import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({ id, name, image, info, publisher }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image.url} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{publisher}</h4>
        <p>
          {info} {id}
        </p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  );
}
