const CheckoutSummary = ({cart, totalSumProducts}) => {
  return(
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
              <img src={product.image} alt={product.title} width={50} style={{borderRadius: "5px"}} />
            </td>
            <td className="align-middle">{product.title}</td>
            <td className="align-middle">${product.precio}</td>
            <td className="align-middle">{product.quantity}</td>
            <td className="align-middle">${product.quantity * product.precio}</td>
          </tr>
        )}
        <tr>
          <td colSpan={3}>&nbsp;</td>
          <td className="fw-bold">Total:</td>
          <td>${totalSumProducts ()}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CheckoutSummary;