import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import NotFoudPage from "./pages/NotFoudPage";
import MenuPage from "./pages/menuPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoudPage />} />
      </Route>
    </Routes>
  );
}

export default App;