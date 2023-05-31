import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataScienceInfo from "./components/DataScienceInfo";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Error404 from "./components/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />}/>
          <Route path={"/category/:id"} element={<ItemListContainer />}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"*"} element={<Error404/>} />
        </Routes>
        <DataScienceInfo />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
