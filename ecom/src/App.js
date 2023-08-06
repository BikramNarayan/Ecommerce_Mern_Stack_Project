import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import Hello from "./Hello";
import AddProduct from "./AddProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Hello />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
