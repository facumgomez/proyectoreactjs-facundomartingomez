import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Icono from "../assets/icono.png"
import Banner from "./Banner";
import Seeker from "./Seeker";
import Loading from "./Loading";
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";

const ItemListContainer = () => {
  const {id} = useParams();
  const [products, setProducts] = useState([]);
  const [filteredSearch, setSearch] = useState("");
  const [loadings, setLoadings] = useState(true);
  const [noProducts, setNoProducts] = useState(false);
  
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    const q = id ? query(productsCollection, where("category", "==", id)) : productsCollection;
    
    const prom = new Promise(resolve => {
      getDocs(q).then(answer => {
        const data = answer.docs.map(product => ({id:product.id, ...product.data()}));
        const filterProducts = data.filter(
          product => (filteredSearch ? product.title.toLowerCase().includes(filteredSearch.toLowerCase()) : true)
        );
        resolve(filterProducts);
      });
    });
    prom.then(data => {
      setProducts(data);
      setNoProducts(data.length === 0);
      setLoadings(false);
    });
  }, [id, filteredSearch]);
  
  const searchFilter = (term) => {
    setSearch(term);
  };
  
  return (
    <>
      {id ? "" : <Banner />}
      <Seeker onSearch={searchFilter} />
      {loadings ? <Loading /> : noProducts ? (<p className="text-center display-6"> <img src={Icono} alt="Icono de Home Deco" />No se encontraron productos que concuerden con la selección.</p>) : (<ItemList products={products} />)}
    </>
  );
}

export default ItemListContainer;