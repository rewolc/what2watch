import { useState, useRef, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import SearchHelp from "../search-help/search-help";

import "./search.scss";

const Search = ({ names }) => {
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
    newletter("")
  };

  return (
    <div className="search">
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
          {names !== undefined & name !== ''
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

export default connect(mapStateToProps)(Search);
