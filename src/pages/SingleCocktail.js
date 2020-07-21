import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  return <h1>single cocktail page id : {id}</h1>;
}
