import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";


const Cheackout = () => {
  const {cart, clear, totalQuantityProducts, totalSumProducts} = useContext(CartContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [orderId, setOrderId] =useState();
  
  const generateOrder = () => {
    (name.length === 0 && email.length === 0 && phone.length === 0) ? false : true
    const buyer = {name:name, email:email, phone:phone};
    const items = cart.map(product => ({id:product.idx, title:product.title, precio:product.precio}));
    const fecha = new Date();
    const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()} : ${fecha.getMinutes()}`;
    const total = totalQuantityProducts();
    const order = {buyer:buyer, items:items, date:date, total:total};
    
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(answer => {
      clear();
      setOrderId(answer.id);
    });
  };
  
  return(
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>Finalizar Compra:</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <CheckoutForm setName={setName} setEmail={setEmail} setPhone={setPhone} generateOrder={generateOrder} />
        </div>
        <div className="col-md-7">
          <CheckoutSummary cart={cart} totalSumProducts={totalSumProducts} /> 
        </div>
      </div>
      <div className="row">
        <div className="col text-center alert">
          {orderId ? <div className="col text-center alert"  style={{border: "2px solid #FF3131", padding: "10px" }}> 
            <h2>¡Gracias por elergirnos!</h2>
            <p>Tu numero de orden es: <b>{orderId}</b></p>
          </div> : ""}
        </div>
      </div>
    </div>
  );
}

export default Cheackout;