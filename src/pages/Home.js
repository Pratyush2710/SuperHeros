import React, { useState } from "react";
import CocktailsList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("spid");
  const [cocktails, setCocktails] = useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.superheroapi.com/api.php/3188112067898670/search/${searchTerm}`
        );
        const data = await response.json();
        const { results } = data;
        if (results) {
          const newCocktails = results.map((item) => {
            const { id, name, image, appearance, biography } = item;
            return {
              id,
              name,
              image,
              info: appearance.gender,
              publisher: biography.publisher,
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailsList loading={loading} cocktails={cocktails} />
    </main>
  );
}
