import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting = {"Bienvenido/a a nuestra tienda"} />
      </div>
  );
}
export default App