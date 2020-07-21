import React from "react";
import Hero from "./Hero";

export default function HeroList({ loading, hero }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }

  if (hero.length < 1) {
    return <h2 className="section-title">Oops, no superhero found !!</h2>;
  }
  // console.log(hero);
  return (
    <section className="section">
      <h2 className="section-title">Super Heros</h2>
      <div className="superhero-center">
        {hero.map((item) => {
          return <Hero key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
