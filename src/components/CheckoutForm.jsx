const CheckoutForm = ({setName, setEmail, setPhone, generateOrder}) => {
  const checkoutFormStyle = {
    color: "#F0F4F2", backgroundColor:"#FF3131"};
  
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Nombre y Apellido:</label>
        <input type="text" className="form-control" onInput={(e) => {setName(e.target.value)}}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Teléfono:</label>
        <input type="text" className="form-control" onInput={(e) => {setPhone(e.target.value)}}/>
      </div>
      <div>
        <button type="button" className="btn btn" style={checkoutFormStyle} onClick={generateOrder}>
          Generar Pedido
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;