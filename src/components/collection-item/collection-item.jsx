import "./collection-item.scss";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeFilm, addToFav, dellFromFav } from "../../redux/tytles/tytles.action";

const CollectionItem = ({
	display,
	type,
	filmId,
	nameRu,
	posterUrl,
	rating,
	removeFilm,
	isFav,
	addFav,
	dellFromFav,
}) => {
	console.log(display);
	let navigate = useNavigate();
	if (display) {
		return (
			<div className="collection-item-container " key={filmId}>
				<div className="collection-item">
					<div className="image">
						<img src={posterUrl} alt="Постер" />
						<button className="btn" onClick={() => navigate(`/${filmId}`)}>
							Смотреть
						</button>
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
					rel="noreferrer"
				>
					{rating === "null" ? 0 : rating}
				</a>{" "}
				{isFav === "yes" ? (
					<div className="favorite icon" onClick={() => dellFromFav(filmId)}>
						&#9733;{" "}
					</div>
				) : (
					<div className="favorite icon" onClick={() => addFav(filmId)}>
						&#9734;{" "}
					</div>
				)}
				<div className="remove icon" onClick={() => removeFilm(filmId)}>
					&#128465;
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};

const mapDispatchToProps = (dispatch) => ({
	removeFilm: (i) => dispatch(removeFilm(i)),
	addFav: (i) => dispatch(addToFav(i)),
	dellFromFav: (i) => dispatch(dellFromFav(i)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
