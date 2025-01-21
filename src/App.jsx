import shoppingNotFound from "./assets/images/shoppingNotFound.svg";
import Banner from "./Components/banner";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact"; // Import Contact correctly
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/footer";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { useState } from "react";
import AddProduct from "./pages/AddProduct";
import Search from "./pages/Search";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const isLoggedIn = false; // Update this condition based on your actual authentication logic

  return (
    <>
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/not-found"
          element={
            <div>
              <img className="m-auto" src={shoppingNotFound} alt="SpinLoader" />
              <p className="centre text-primary capitalize">not founddddd</p>
            </div>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/search" element={<Search />} />

        {/* Protected Route for Profile */}
        {isLoggedIn ? (
          <>
            <Route
              path="/profile"
              element={<div>This is my profile page</div>}
            />
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={<Navigate to="/login" replace={false} />}
            />
          </>
        )}
      </Routes>
      {<Footer />}
    </>
  );
}

export default App;
