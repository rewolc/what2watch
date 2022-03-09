import "./collection.scss";
import CollectionItem from "../collection-item/collection-item";
import AddItem from "../add-collection-item/add-collection-item";


const Collection = () => (

   <div className="collection-container">
       <AddItem />
       <CollectionItem/>
      

   </div>


)
export default Collection;