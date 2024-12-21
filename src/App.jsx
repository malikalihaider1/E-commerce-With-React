import Banner from "./Components/banner";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact"; // Import Contact correctly
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/footer";

function App() {
  const isLoggedIn = true; // Update this condition based on your actual authentication logic

  return (
    <>
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/not-found" element={<div>not founddddd</div>} />

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
      {<Footer/>}
    </>
  );
}

export default App;
