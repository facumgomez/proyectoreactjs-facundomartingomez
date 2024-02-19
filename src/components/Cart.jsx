import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Logo2 from "../assets/logo2.png";

const Cart = () => {
  const cartStyle = {
    backgroundColor: "#FF3131", color: "#F0F4F2"};
  
  const {cart, removeProduct, clear, totalQuantityProducts, totalSumProducts} = useContext(CartContext);
    if (totalQuantityProducts () == 0){
      return(
        <div className="container">
          <div className="row">
            <div className="col text-center alert" style={{border: "2px solid #FF3131", padding: "10px", margin: "10px"}}>
              <img src={Logo2} alt="Logo de Home Deco" />
              <p className="display-5">El carrito de compras está vacío.</p>
              <div>
                <Link to={"/"} className="btn btn" style={cartStyle}>Volver al Incio</Link>
              </div>
            </div>
          </div>
        </div>
      );
    };
  
  return(
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>Resumen de compra:</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>Producto:</td>
                <td>Precio:</td>
                <td>Cantidad:</td>
                <td>SubTotal:</td>
              </tr>
              {cart.map (product =>
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.title} width={70} style={{borderRadius: "5px"}} />
                  </td>
                  <td className="align-middle">{product.title}</td>
                  <td className="align-middle">${product.precio}</td>
                  <td className="align-middle">{product.quantity}</td>
                  <td className="align-middle">${product.quantity * product.precio}</td>
                  <td className="align-middle text-end">
                    <a href="#">
                      <i className="bi bi-trash3 text-dark" onClick={() => {removeProduct(product.id)}}></i>
                    </a>
                  </td>
                </tr>
              )}
              <tr>
                <td colSpan={3}>
                  <a href="#" className="btn btn" style={cartStyle} onClick={clear}>Eliminar Carrito</a>
                </td>
                <td className="fw-bold">Total:</td>
                <td>${totalSumProducts ()}</td>
                <td className="text-end"><Link to={"/checkout"} className="btn btn" style={cartStyle}>Comprar Ahora</Link></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default Cart;