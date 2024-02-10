import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Main from "./components/main/Main";
import FilteredProducts from "./components/filteredProducts/FilteredProducts";
import SingleProduct from "./components/filteredProducts/SingleProduct";
import Login from "./components/login/Login";

export default function App() {
  const user = useSelector((state) => state.auth.user);
  const {authUser} = user
  console.log('user', user)
  console.log('authUser', authUser)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ authUser ? <Main /> : <Login/>} />
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
