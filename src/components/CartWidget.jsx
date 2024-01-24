import cart from "../assets/cart.png"

const CartWidget = () => {
    return(
        <button>
            <img src={cart} alt="cart" />
            <span>1</span>
        </button>
    )
}

export default CartWidget