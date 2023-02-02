import "../../App.css"
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../../pages/HomePage";
import CategoriesPage from "../../pages/CategoriesPage";
import ProductsPage from "../../pages/ProductsPage";
import ProductPage from "../../pages/ProductPage";
import BasketCartPage from "../../pages/BasketCartPage"

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="category" element={<CategoriesPage />} />
          <Route path="category/:categororys" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<BasketCartPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;