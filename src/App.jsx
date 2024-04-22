import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Products from "./Pages/Products/Products";
import { CartProvider } from "./cartContext";
import Footer from "./Footer/Footer";
import CursorGlow from "./CursorGlow/CursorGlow";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
