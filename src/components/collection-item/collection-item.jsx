import "./collection-item.scss";
import { connect } from "react-redux";
import { createSelectorCreator } from "reselect";
// import { removeFilm } from "../../redux/tytles/tytles.action";
const CollectionItem = ({ type, filmId, nameRu, posterUrl, rating, removeFilm }) => (
  <div className="collection-item-container " key={filmId}>
    <div className="collection-item">
      <div className="image">
        <img src={posterUrl} alt="Постер" />
        <button className="btn">Смотреть</button>
      </div>
    </div>
    <div className="name">{nameRu}</div>

    <a
      className="raiting icon"
      href={
        type === "FILM"
          ? `https://www.kinopoisk.ru/film/${filmId}/`
          : `https://www.kinopoisk.ru/series/${filmId}/`
      }
      target="_blank"
    >
      {rating == "null" ? 0 : rating}
    </a>
    <div className="favorite icon">&#9734;</div>
    <div className="remove icon" onClick = {'removeFilm'}>&#128465;</div>
  </div>
);
// const mapDispatchToProps = createSelectorCreator({
//    removeFilm :  removeFilm
// })
// export default connect(null,mapDispatchToProps)(CollectionItem);
export default CollectionItem;


