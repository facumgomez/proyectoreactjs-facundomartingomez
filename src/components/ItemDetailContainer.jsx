import productos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  useEffect (() => {
    const prom = new Promise (resolve =>{
      setTimeout (() => {
        let producto = productos.find (product => product.id == parseInt(id));
        resolve (producto);
      }, 1500);
    })
    prom.then(data =>{
      setProduct (data);
    })
  }, [id]);
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer;