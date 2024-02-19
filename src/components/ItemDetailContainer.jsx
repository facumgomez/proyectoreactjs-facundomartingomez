import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loadings, setLoadings] = useState(true);
  
  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "products", id);
    getDoc(productRef).then(snapshot => {
      if (snapshot.exists()) {
        setLoadings(false);
        setProduct({id: snapshot.id, ...snapshot.data()});
      }
    });
  }, [id]);
  
  return (
    <>
      {loadings ? <Loading /> : <ItemDetail product={product}/>};
    </>
  );
}

export default ItemDetailContainer;