import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addTitle } from "../../redux/tytles/tytles.action";
import "./filter.scss";



const Filter = ({add}) => {
  const dispatch = useDispatch();
  const store = useSelector(store => store)
  const [name, newletter] = useState();
  const handleChange = (event) => {
    newletter(event.target.value);
  };
  const handleSubmit = (event) => {
    dispatch({type: 'FETCH', name})
    event.preventDefault();
    
  };
  return (
    <div className="filter">
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Добавить"  />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  
   add: (item) => dispatch(addTitle(item)),
});
export default connect(null,mapDispatchToProps)(Filter);
