// @ts-nocheck
import "./App.css";
import Navbar from "./components/header/Navbar.js";
import Newnav from "./components/header/newnavbar/Newnav.js";
import Maincomp from "./components/home/Maincomp.js";
import Footer from "./components/footer/Footer.js";
import Sign_in from "./components/signup_sign/Sign_in.js";
import SignUp from "./components/signup_sign/SignUp.js";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart.js";
import Buynow from "./components/buynow/Buynow.js";
import { ToastContainer } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);

  return (
    <>
      {data ? (
        <>
          <Navbar />
          <Newnav />
          <Routes>
            <Route path="/" element={<Maincomp />} />
            <Route path="/login" element={<Sign_in />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/getproductsone/:id" element={<Cart />} />
            <Route path="/buynow" element={<Buynow />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
}

export default App;
