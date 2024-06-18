import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Catalog from "../pages/catalog-component/Catalog";
import Cart from "../pages/cart-component/Cart";
import Thankyou from "../pages/thankYou-component/Thankyou";

const Rotas = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Catalogo</Link>
        <Link to={"/cart"}>Carrinho</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Catalog />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/thank-you" element={<Thankyou />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
