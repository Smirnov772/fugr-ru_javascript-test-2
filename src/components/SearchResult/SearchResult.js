import Book from "../Book/Book";
function SearchResult(props) {
  return (
    <section className="search-result">
      <p className="found-result">Found {props.result > 0 ? props.result : 0} result</p>
      <div className="books">
        {props.cards.map((item) => (
          <Book
            onClick={props.handleClick}
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
      <button onClick={props.clickMoreButton} className="books__button">
        load more
      </button>
    </section>
  );
}
export default SearchResult;
