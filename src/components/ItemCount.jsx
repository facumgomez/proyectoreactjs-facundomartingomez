import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
  const itemCountStyle = {
    backgroundColor: "#FF3131", color: "#F0F4F2"};
  
  const [quantity, setQuantity] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdd, setItemAdd] = useState(false);
  
  const increment = () => {
    quantity < itemStock ? setQuantity(quantity + 1) : null;
  };
  const decrement = () => {
    quantity > 1 ? setQuantity(quantity - 1) : null;
  };

  const addCart = () => {
    if (quantity <= itemStock) {
      setItemStock(itemStock - quantity);
      setQuantity(1);
      onAdd(quantity);
      setItemAdd (true);
    };
  };
  
  useEffect(() => {
    setItemStock(stock);
  }, [stock]);
  
  return (
    <>
      <div className="row my-1">
        <p className="text-uppercase fw-bold">stock disponible: {itemStock}</p>
      </div>
      <div div className="row my-1">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button className="btn btn" onClick={decrement} disabled={quantity === 1|| itemStock === 0}  style={itemCountStyle}>-</button>
            <button className="btn btn" disabled={itemStock === 0} style={itemCountStyle}>{quantity}</button>
            <button className="btn btn" onClick={increment} disabled={quantity === itemStock || itemStock === 0} style={itemCountStyle}>+</button>
          </div>
        </div>
      </div>
      <div className="row my-1">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group" aria-label="First group">
            {itemAdd ? <Link to={"/cart"} className="btn btn" style={itemCountStyle}>
              Ver Carrito</Link> :
            <button type= "button" className="btn btn" onClick={addCart} disabled = {itemStock === 0} style={itemCountStyle}>
              Agregar al Carrito
            </button>}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCount;
