import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
export default function SingleHero() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [hero, setHero] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getHero() {
      try {
        const response = await fetch(
          `https://www.superheroapi.com/api.php/3188112067898670/${id}`
        );
        const data = await response.json();
        console.log(data);
        if (data) {
          const { name, image, appearance, biography, connections } = data;
          const newHero = {
            name,
            image: image.url,
            info: appearance.gender,
            fullName: biography["full-name"],
            publisher: biography.publisher,
            firstAppearance: biography["first-appearance"],
            groups: connections["group-affiliation"],
            aliases: biography.aliases,
          };

          console.log(newHero);
          setHero(newHero);
        } else {
          setHero(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getHero();
  }, [id]);

  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!hero) {
    return <h2 className="section-title"> No superhero to display</h2>;
  } else {
    // console.log(hero.aliases);
    return (
      <section className="section superhero-section">
        <h2 className="section-title">{hero.name}</h2>
        <div className="drink">
          <img src={hero.image} alt={hero.name} />
          <div className="drink-info">
            <p>Name : {hero.name}</p>
            <p>Full Name : {hero.fullName}</p>
            <p>Publisher: {hero.publisher}</p>
            <p>First Appearance : {hero.firstAppearance}</p>
            <ul>
              <p>
                Aliases:
                <br />
                <br />{" "}
                {hero.aliases.map((item, index) => {
                  return item ? (
                    <li key={index}>
                      {" "}
                      <span key={index}>{item}</span>
                    </li>
                  ) : null;
                })}
                {/* {hero.aliases} */}
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
