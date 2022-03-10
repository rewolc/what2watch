import { useState,useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import SearchHelp from "../search-help/search-help";

import "./search.scss";

const Search = ({names}) => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [name, newletter] = useState("");
  const curWidth = document.getElementById("inpt");
  let currentWidth;

  const handleChange = (event) => {
    newletter(event.target.value);
    dispatch({type: 'FIND_HELP', name})
     currentWidth = curWidth.offsetWidth
     console.log(currentWidth)
  };
  const handleSubmit = (event) => {
    dispatch({ type: "FETCH", name });
    event.preventDefault();
    setTimeout(() => newletter(""), 500);
    
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit} className='form'>
        <input
        id='inpt'
          className="search-form"
          type="text"
          
          placeholder="Введите название"
          onChange={handleChange}
          value={name}
        />
        <input className="search-button" type="submit" value="Добавить" />
        
      
      <div className={currentWidth === 300 ? 'search-help-cont active' : 'search-help-cont'}>
      {names !==undefined ? names.map(i => <SearchHelp key={i.filmId} names={i} /> ) : null}
      </div>
      </form>
      
    </div>
  );
};
const mapStateToProps = (state) => ({
  names : state.tytle.names[0]
})



export default connect(mapStateToProps)(Search);
