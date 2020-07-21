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
    console.log(cocktail.aliases);
    return (
      <section className="section cocktail-section">
        <h2 className="section-title">{cocktail.name}</h2>
        <div className="drink">
          <img src={cocktail.image} alt={cocktail.name} />
          <div className="drink-info">
            <p>Name : {cocktail.name}</p>
            <p>Full Name : {cocktail.fullName}</p>
            <p>Publisher: {cocktail.publisher}</p>
            <p>First Appearance : {cocktail.firstAppearance}</p>
            <ul>
              <p>
                Aliases:
                <br />
                <br />{" "}
                {cocktail.aliases.map((item, index) => {
                  return item ? (
                    <li>
                      {" "}
                      <span key={index}>{item}</span>
                    </li>
                  ) : null;
                })}
                {/* {cocktail.aliases} */}
              </p>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Link to="/" className="btn btn-primary">
          {" "}
          Back Home
        </Link>
      </section>
    );
  }
}
