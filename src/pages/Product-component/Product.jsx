import { useEffect, useState } from "react";
import { createClient } from "pexels";

const Product = ({ product, onAddToCart }) => {
  //api do pexels para buscar as fotos
  const [foto, setFoto] = useState("");
  useEffect(() => {
    const client = createClient(
      "7x8umGIM0Oay5TAl7HrgEr25C7bwbTc8RthufGYFeh3dmNR3t2HON4s6"
    );
    client.photos.show({ id: product.image }).then((photo) => {
      setFoto(() => photo.src.original);
    });
  }, []);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <img src={foto} alt={product.name} />
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
      <div className="cart-buttons">
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <button onClick={() => onAddToCart(product, quantity)}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Product;
