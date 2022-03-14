import "./film-page.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

const FilmPage = (films) => {
  const location = useLocation();
  const id = location.pathname.slice(1);
  console.log(films.films);
  console.log(location.pathname.slice(1));
  const filmById =
    films.films.length !== 0
      ? films.films.filter((i) => i.filmId == id)
      : "Ошибка";
  console.log(filmById);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://yohoho.cc/yo.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="collection-container">
      <div className="image-cont">
        <img src={`${filmById[0].posterUrl}`} alt="" />
      </div>
      <div
        id="yohoho"
        data-title={`${filmById[0].nameRu}`}
        className="video"
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: state.tytle.tytles,
});
export default connect(mapStateToProps)(FilmPage);
