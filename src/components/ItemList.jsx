import Item from "./Item";

const ItemList = ({products}) => {
  return (
    <div className="container my-5">
      <div className="row">
        {products.map (produc => (
          <Item key={produc.id} produc={produc}/> 
        ))}
      </div>
    </div>
  )
}


export default ItemList;