import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.superheroapi.com/api.php/3188112067898670/${id}`
        );
        const data = await response.json();
        // console.log(data);
        if (data) {
          const { name, image, appearance, biography, connections } = data;
          const newCocktail = {
            name,
            image: image.url,
            info: appearance.gender,
            fullName: biography["full-name"],
            publisher: biography.publisher,
            firstAppearance: biography["first-appearance"],
            groups: connections["group-affiliation"],
            aliases: biography.aliases,
          };

          console.log(newCocktail);
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!cocktail) {
    return <h2 className="section-title"> No superhero to display</h2>;
  } else {
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          {" "}
          Back Home
        </Link>
        <h2 className="section-title">{cocktail.name}</h2>
        <div className="drink">
          <img src={cocktail.image} alt={cocktail.name} />
          <div className="drink-info">
            <p>Name : {cocktail.name}</p>
            <p>Name : {cocktail.name}</p>
            <p>Name : {cocktail.name}</p>
            <p>Name : {cocktail.name}</p>
            <p>Name : {cocktail.name}</p>
            <p>Name : {cocktail.name}</p>
            <p>Name : {cocktail.name}</p>
            <p>Name : {cocktail.name}</p>
            <p>Name : {cocktail.name}</p>
            <p>Name : {cocktail.name}</p>
          </div>
        </div>
      </section>
    );
  }

  return <h1>single cocktail page id : {id}</h1>;
}
