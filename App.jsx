import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import toast, { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Home from "./components/Home";
import CartDetails from "./components/CartDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
