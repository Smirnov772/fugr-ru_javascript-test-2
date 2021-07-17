import React from "react";
import SectionWithForm from "../SectionWithForm/SectionWithForm";
function SearchFormBooks(props) {
  const [input, setInput] = React.useState("");
  const [categories, setCategories] = React.useState("all");
  const [sorting, setSorting] = React.useState("relevance");
  console.log("input", input);
  console.log("categories", categories);
  console.log("sorting", sorting);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleCategories(e) {
    setCategories(e.target.value);
  }
  function handleSorting(e) {
    setSorting(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch({
      input,
      categories,
      sorting,
    });
  }
  return (
    <SectionWithForm title="Search for books" onSubmit={handleSubmit}>
      <div className="forms__input-container">
        <input 
 
          type="text"
          onChange={handleInput}
          className="forms__input"
        ></input>
        <button className="forms__button" type="submit"></button>
      </div>
      <div className="forms__select-container">
        <p className="forms__paragraph">
          Categories
          <select className="forms__select" onChange={handleCategories}>
            <option label="all" value=""></option>
            <option>art</option>
            <option>biography</option>
            <option>computers</option>
            <option>history</option>
            <option>medical</option>
            <option>poetry</option>
          </select></p>
        
        <p className="forms__paragraph">
          Sorting by
          <select className="forms__select" onChange={handleSorting}>
            <option>relevance</option>
            <option>newest</option>
          </select></p>
        
      </div>
    </SectionWithForm>
  );
}

export default SearchFormBooks;
