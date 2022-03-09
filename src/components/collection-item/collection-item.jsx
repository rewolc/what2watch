import "./collection-item.scss";

const CollectionItem = ({ nameRu, posterUrl, rating }) => (
  <div className="collection-item-container ">
    <div className="collection-item">
      <div className="image">
        <img src={posterUrl} alt="Постер" />
      </div>
    </div>
    <div className="name">{nameRu}</div>
    <div className="raiting">{rating}</div>
  </div>
);

export default CollectionItem;
