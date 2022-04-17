import "./search.scss";

import { useState } from "react";
import { connect, useDispatch } from "react-redux";

import SearchHelp from "../search-help/search-help";

import { Checkbox } from "antd";
import { checkFav } from "../../redux/tytles/tytles.action";

const Search = ({ names, checkFav }) => {
	const dispatch = useDispatch();

	const [name, newletter] = useState("");

	const handleChange = (event) => {
		newletter(event.target.value);
		dispatch({ type: "FIND_HELP", name });
	};
	const handleSubmit = (event) => {
		dispatch({ type: "FETCH", name });
		event.preventDefault();
		setTimeout(() => newletter(""), 500);
	};
	const handleClick = () => {
		newletter("");
	};

	return (
		<div className="search">
			<Checkbox onChange={() => checkFav()} className="check">
				Избранное?
			</Checkbox>

			<form onSubmit={handleSubmit} className="form">
				<input
					id="inpt"
					className="search-form"
					type="text"
					placeholder="Введите название"
					onChange={handleChange}
					value={name}
				/>
				<input className="search-button" type="submit" value="Добавить" />

				<div className={"search-help-cont"} onClick={handleClick}>
					{(names !== undefined) & (name !== "")
						? names.map((i) => <SearchHelp key={i.filmId} names={i} />)
						: null}
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	names: state.tytle.names[0],
});

const mapDispatchToProps = (dispatch) => ({
	checkFav: (i) => dispatch(checkFav(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
