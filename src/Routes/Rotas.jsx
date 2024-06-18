import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Catalog from "../pages/catalog-component/Catalog";
import Cart from "../pages/cart-component/Cart";
import Thankyou from "../pages/thankYou-component/Thankyou";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Rotas = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        toast.info(`Quantidade atualizada no carrinho: ${product.name}`);
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success(`${product.name} adicionado ao carrinho!`);
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const handleUpdateCart = (product, quantity) => {
    setCartItems((prevItems) => {
      toast.info(`Quantidade atualizada: ${product.name}`);
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: +quantity } : item
      );
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => {
      toast.error(`${product.name} removido do carrinho.`);
      return prevItems.filter((item) => item.id !== product.id);
    });
  };

  return (
    <BrowserRouter>
      <nav>
        <Link className="link" to={"/"}>
          Catalogo
        </Link>
        <Link className="link" to={"/cart"}>
          Carrinho
        </Link>
      </nav>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Catalog onAddToCart={handleAddToCart} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                onUpdateCart={handleUpdateCart}
                onRemoveFromCart={handleRemoveFromCart}
                onCheckout={() => {
                  if (cartItems.length > 0) {
                    toast.success("Compra finalizada com sucesso!");
                    setCartItems([]);
                  } else {
                    toast.error("Seu carrinho está vazio.");
                  }
                }}
              />
            }
          ></Route>
          <Route
            path="/thank-you"
            element={
              <Thankyou
                cartItems={cartItems}
                clearCart={() => setCartItems([])}
              />
            }
          ></Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
};

export default Rotas;
