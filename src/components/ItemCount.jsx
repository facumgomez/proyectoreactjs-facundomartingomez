import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
  const [quantity, setQuantity] = useState(1) 
  const [itemStock, setItemStock] = useState(stock) 
  const [cartStock, setCartStock] = useState(stock);
  const increment = () => {
    quantity < itemStock ? setQuantity(quantity + 1) : null;
  }

  const decrement = () => {
    quantity > 1 ? setQuantity(quantity - 1) : null;
  }

  const onAdd = () => {
    if (quantity > 0 && quantity <= itemStock) {
      setItemStock(itemStock - quantity);;
      setQuantity(1);
    }
  }

  useEffect(() => {
    setItemStock(stock)
  }, [stock])

  return (
    <>
      <div className="row my-1">
        <p>Stock disponible: {itemStock}</p>
      </div>
      <div div className="row my-1">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button className="btn btn" onClick={decrement} disabled={quantity === 1|| itemStock === 0}  style={{ backgroundColor: "#FF3131", color: "#F0F4F2"}}>-</button>
            <button className="btn btn" disabled={itemStock === 0} style={{backgroundColor: "#FF3131", color: "#F0F4F2"}}>{quantity}</button>
            <button className="btn btn" onClick={increment} disabled={quantity === itemStock || itemStock === 0} style={{ backgroundColor: "#FF3131", color: "#F0F4F2"}}>+</button>
          </div>
        </div>
      </div>
      <div className="row my-1">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button className="btn btn" onClick={() => onAdd(quantity)}disabled ={itemStock === 0} style={{backgroundColor: "#FF3131", color: "#F0F4F2"}}>
            Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCount
