import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {totalQuantityProducts} = useContext(CartContext);
  const cartWidgetStyle = {
    fontSize: "25px", color: "#F0F4F2",  border:"5px"};
  
  return(
    <Link to={"/cart"}>
      <button type="button" className="btn btn"style={cartWidgetStyle} >
        <i className="bi bi-bag">
          <span>{totalQuantityProducts ()}</span>
        </i>
      </button>
    </Link>
  );
}

export default CartWidget;