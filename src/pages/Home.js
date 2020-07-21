import React, { useState } from "react";
import HeroList from "../components/HeroList";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("spid");
  const [hero, setHero] = useState([]);

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
          const newHero = results.map((item) => {
            const { id, name, image, appearance, biography } = item;
            return {
              id,
              name,
              image,
              info: appearance.gender,
              publisher: biography.publisher,
            };
          });
          setHero(newHero);
        } else {
          setHero([]);
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
      <HeroList loading={loading} hero={hero} />
    </main>
  );
}
