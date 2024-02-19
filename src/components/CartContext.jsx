import { createContext, useState } from "react";
export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  
  const addItem = (products, quantity) => {
    if (isInCart(products.id)) {
      let pos = cart.findIndex (product => product.id === products.id);
      cart[pos].quantity += quantity;
      setCart ([...cart]);
    } else {
      cart.push({...products, quantity : quantity});
      setCart ([...cart]);
    };
  };
  
  const removeProduct = (id) => {
    const items = cart.filter (product => product.id != id);
    setCart ([...items]);
  };
  const clear = () => {
    setCart ([]);
  };
  const isInCart = (id) => {
    return cart.some(product => product.id === id);
  };
  const totalQuantityProducts = () => {
    return cart.reduce ((acc, product) => acc += product.quantity, 0);
  };
  const totalSumProducts = () => {
    return cart.reduce ((acc, product) => acc += product.quantity * product.precio, 0);
  };
  
  return(
    <CartContext.Provider value={{cart, addItem, removeProduct, clear, totalQuantityProducts, totalSumProducts}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;