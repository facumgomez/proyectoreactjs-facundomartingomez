import productos from "./json/productos.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Banner from "./Banner";


const ItemListContainer = () => {
  const {id} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const prom = new Promise (resolve =>{
      setTimeout (() => {
        resolve (id ? productos.filter(productos => productos.category == id) : productos)
      }, 1500);
    })
    prom.then(data =>{
      setProducts (data);
    })
  }, [id]);

  return (
    <>
      {id ? "" : <Banner />}
      <ItemList products ={products} />
    </>
  )
}

export default ItemListContainer;