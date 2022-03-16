import "./description.scss";

export const Description = ({ film }) => {
  const { genres, nameRu, rating, year, description } = film;
  console.log(genres);
  console.log(film);
  return (
    <div className="descr-cont">
      <div className="name">{nameRu}</div>
      <div className="descrt">
        <div className="year">
          <span> Год : </span> {year}
        </div>
        <div className="genres">
          {" "}
          <span>Жанры : </span>{" "}
          {genres.map((i) => (
            <p> {i.genre} | </p>
          ))}
        </div>
        <div className="rate">
          <span>Рейтинг на Кионпоиске : </span> {rating}
        </div>

        <div className="text">
          <span> Описание : </span> {description}
        </div>
      </div>
    </div>
  );
};
