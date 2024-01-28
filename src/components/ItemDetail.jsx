import ItemCount from "./ItemCount"

const ItemDetail = ({product}) =>{
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-3">
          <img src={product.image} alt={product.title} className="img-fluid" style={{borderRadius: "50px"}}/>
        </div>
        <div className="col-md-4">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h4>${product.precio}</h4>
          <ItemCount stock={product.stock}/>
        </div>
      </div>
    </div>
    )
  }
  
  export default ItemDetail;