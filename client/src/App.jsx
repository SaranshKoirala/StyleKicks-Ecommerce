<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import ShoeDetail from "./Pages/ShoeDetail";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ShoeDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
=======
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Error from "./page/Error";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
>>>>>>> e6d4ee861b6e3d686dc981686bebe6268a63ef48
  );
}

export default App;
