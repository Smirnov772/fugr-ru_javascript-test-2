import React, { useState } from "react";
import SearchFormBooks from "../SearchFormBooks/SearchFormBooks";
import Book from "../Book/Book";
import BookInfo from "../BookInfo/BookInfo";
import api from "../../utils/api";
import "./Main.css";

function Main() {
  const [cards, setCards] = useState([]);
  const [params, setParams] = useState([]);
  const [result, setResult] = useState("");
  
  console.log(cards);
  console.log(params);
  function clickMoreButton() {
    api
      .getAllCards(params, cards.length)
      .then((dataCard) => {
        setCards([...cards, ...dataCard.items])})
      .catch((err) => console.log(err));
  }

  function onSearch(params) {

    setParams(params);
    api
      .getAllCards(params, 0)
      .then((dataCard) => {
        setCards(dataCard.items);
        setResult(dataCard.totalItems);
      })
      .catch((err) => console.log(err));
  }

  return (
    <main className="content">
      <section className="search">
        <SearchFormBooks onSearch={onSearch}></SearchFormBooks>
      </section>

      <section className="search-result">
        <p className="found-result">Found {result > 0 ? result : 0} result</p>
        <div className="books">
          {cards.map((item) => (
            <Book
              key={item.id}
              thumbnail={
                item.volumeInfo.readingModes.image
                  ? item.volumeInfo.imageLinks.thumbnail
                  : "http://s003.radikal.ru/i202/1405/45/86a3a577fba4.png"
              }
              category={item.volumeInfo.categories}
              authors={item.volumeInfo.authors}
              title={item.volumeInfo.title}
            />
          ))}
        </div>
        <button onClick={clickMoreButton} className="books__button">
          load more
        </button>
      </section>
      <BookInfo></BookInfo>
    </main>
  );
}

export default Main;
