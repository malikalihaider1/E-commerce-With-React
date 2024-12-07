import Banner from './Components/banner';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact'; // Import Contact correctly
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const isLoggedIn = false;  // Update this condition based on your actual authentication logic

  return (
    <>
      <Banner />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* Protected Route for Profile */}
        {isLoggedIn ? (
          <>
            <Route path="/profile" element={<div>This is my profile page</div>} />
            <Route path="/login" element={<Navigate to="/" replace={true} />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace={false} />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
