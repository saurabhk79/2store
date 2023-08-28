import { useEffect, useState, useContext } from "react";
import { MyContext } from "../Context";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const { setCart, cart } = useContext(MyContext);

  const addToCart = (itemToAdd) => {
    const itemIndex = cart.findIndex(
      (cartItem) => cartItem.item.id === itemToAdd.id
    );

    if (itemIndex !== -1) {
      const updatedCartItems = [...cart];
      updatedCartItems[itemIndex].count += 1;
      setCart(updatedCartItems);
    } else {
      setCart([...cart, { item: itemToAdd.item, count: 1 }]);
    }

    console.log(item);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json))
      .catch((err) => console.log(err));

    // item.description.split("/").map((line, idx) => {
    //   // return <p key={idx}>{line}</p>;
    //   console.log(line, idx);
    // });
  }, [id]);

  return (
    <>
      <div
        className="d-flex justify-content-between mt-5"
        style={{ maxWidth: "1080px", margin: "auto" }}
      >
        <img src={item.image} alt="" height={500} />
        <div>
          <h1>{item.title}</h1>
          <h3 className="text-success">{item.category}</h3>
          <p className="lead">{item.description}</p>
          <button
            onClick={() => {
              addToCart(item);
            }}
          >
            Add to Cart!
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
