import { useContext } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./CartContext";

const ItemDetail = ({product}) => {
  const {addItem} = useContext (CartContext);
  const onAdd = (quantity) => {
    addItem (product, quantity);
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-3">
          <img src={product.image} alt={product.title} className="img-fluid" style={{borderRadius: "50px"}}/>
        </div>
        <div className="col-md-4">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h4 style={{fontWeight: "bold", color: "#FF3131"}}>${product.precio}</h4>
          <ItemCount stock={product.stock} onAdd={onAdd}/>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;