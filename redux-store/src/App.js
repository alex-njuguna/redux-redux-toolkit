import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./components/main/Main";
import FilteredProducts from "./components/filteredProducts/FilteredProducts";
import SingleProduct from "./components/filteredProducts/SingleProduct";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/filtered-products/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filtered-products/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
