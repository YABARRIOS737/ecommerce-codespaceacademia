import DataScienceInfo from "./components/DataScienceInfo";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"No has agregado cursos al carrito!"}/>
      <DataScienceInfo/>
      <Footer/>
    </div>
  );
}

export default App;
