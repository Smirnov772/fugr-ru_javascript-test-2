import "./BookInfo.css";
function BookInfo() {
  return (
    <section className="book-info">
      <div className="book-info__image-container">
        {" "}
        <img
          className="book-info__image"
          src="https://s1.livelib.ru/boocover/1000003390/200x305/88f8/boocover.jpg"
          alt=""
        ></img>
      </div>
      <div className="book-info__container">
        <p className="book-info__category">Category</p>
        <h3 className="book-info__title">
          Одним из ответов был такой: Скажите пожалуйста как описать
          книгу— это на популярном сайте. Затем
          поясняет: тут нужно не описание содержания а именно Внешности книги
          =*** И ему отвечают: пишите как будто краткое содержание, характер
          главного героя, и во что он вляпался (конфликт), яркие, запоминающиеся
          моменты... и немного об авторе можно, и когда при каких
          обстоятельствах была написанна книга!!! и цвет обложки-о чём примерно.
          Так вот описать книгу это значит не описывать ее внешний вид (толстая,
          тонкая, в мягкой обложке или твердой, ее цвет и т.п.) и даже не само
          содержание книги, т.е. о чем она, а описать книгу это значит написать
          — автор книги, ее название, выходные данные. Если с автором и
          названием все понятно, то что такое выгодные данные книги? Выходные
          данные — это 1) место выпуска издания; 2) имя издателя (название
          изд-ва); 3) год выпуска издания.
        </h3>
        <p className="book-info__author">Author</p>
      </div>
    </section>
  );
}

export default BookInfo;
