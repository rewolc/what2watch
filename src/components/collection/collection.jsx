import "./collection.scss";
import CollectionItem from "../collection-item/collection-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTitle } from "../../redux/tytles/tytles.selectors";


const Collection = ({serial}) => (
  <div className="collection-container">
    {serial.map(({...otherProp}) => (<CollectionItem {...otherProp} /> ))
      }
  </div>
);

const mapStateToProps = (state) =>({
serial : state.tytle.tytles
})

export default connect(mapStateToProps)(Collection);
