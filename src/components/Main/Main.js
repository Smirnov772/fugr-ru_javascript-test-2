import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import SearchFormBooks from "../SearchFormBooks/SearchFormBooks";

import BookInfo from "../BookInfo/BookInfo";
import SearchResult from "../SearchResult/SearchResult";
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
        setCards([...cards, ...dataCard.items]);
      })
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
  function handleClick() {}

  return (
  
      <Route>
        <SearchFormBooks onSearch={onSearch}></SearchFormBooks>
        <Switch>
          <Route exact path="/fugr-ru_javascript-test-2/">
            <SearchResult
              cards={cards}
              result={result}
              clickMoreButton={clickMoreButton}
              handleClick={handleClick}
            ></SearchResult>
          </Route>
          <Route path="/book-info">
            <BookInfo></BookInfo>
          </Route>
        </Switch>
      </Route>
  
  );
}

export default Main;
