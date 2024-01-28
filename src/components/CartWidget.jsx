import cart from "../assets/cart.png";

const CartWidget = () => {
    return(
        <button className="cartWidget" style={{ display: "flex", alignItems: "center", backgroundColor: "transparent", border: "none"}}>
            <img src={cart} alt="cart" />
            <span style={{ fontSize: "25px", marginLeft: "5px", backgroundColor: "#F0F4F2", borderRadius: "15px"}}>0</span>
        </button>
    )
}

export default CartWidget;