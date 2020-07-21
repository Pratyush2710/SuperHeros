import React from "react";

export default function SearchForm({ setSearchTerm }) {
  const searchValue = React.useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchHero = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section">
      <h2 className="section-title">Search Superheros</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Search your favourite superhero</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchHero}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
}
