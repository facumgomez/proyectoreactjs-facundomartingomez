import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css"
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";


const App =() => {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path={"/"} element={<ItemListContainer />}/>
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes> 
      <Footer />
    </BrowserRouter>
  );
}
export default App