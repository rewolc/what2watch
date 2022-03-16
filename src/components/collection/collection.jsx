import "./collection.scss";
import CollectionItem from "../collection-item/collection-item";
import { connect } from "react-redux";

const Collection = ({ serial }) => (
  <div className="collection-container main-page">
    {serial.map((i, indx) => (
      <CollectionItem {...i} key={indx} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  serial: state.tytle.tytles,
});

export default connect(mapStateToProps)(Collection);
