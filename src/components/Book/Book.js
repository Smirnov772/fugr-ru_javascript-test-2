import "./Book.css";
function Book(props) {
  return (
    <div className="card">
      <img className="card__image" src={`${props.thumbnail}`} alt="обложка"></img>
      <div className="card__container">
        <p className="card__category">{props.category}</p>
        <h3 className="card__title">{props.title}</h3>
        <p className="card__author">{props.authors}</p>
      </div>
    </div>
  );
}

export default Book;
