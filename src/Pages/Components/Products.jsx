import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../Context";
import "./products.css";

const Products = () => {
  const { setProducts, products } = useContext(MyContext);

  useEffect(() => {
    const getProducts = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getProducts();
  }, []);

  return (
    <section className="p-3 my-5 pt-5">
      <div className="text-center">
        <h2>Our Products</h2>
        <h6>Browse by Category</h6>

        <div className="d-flex align-items-center justify-content-center my-5 filter-box">
          <div className="mx-3 filters filled">All</div>
          <div className="mx-3 filters">Men&apos;s Clothing</div>
          <div className="mx-3 filters">Women&apos;s Clothing</div>
          <div className="mx-3 filters">Jewelery</div>
          <div className="mx-3 filters">Electronics</div>
        </div>
      </div>

      <div className="row">
        {products.map((item) => {
          return (
            <div key={item.id} className="col-12 col-sm-4 col-lg-3">
              <ProductItem item={item} />
            </div>
          );
        })}
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button>Load More!</button>
      </div>
    </section>
  );
};

export default Products;

function ProductItem(item) {
  const {
    // category,
    id,
    image,
    price,
    rating,
    title,
  } = item.item;

  console.log(rating);
  // const { setCart, cart } = useContext(MyContext);

  // const addToCart = (itemToAdd) => {
  //   const itemIndex = cart.findIndex(
  //     (cartItem) => cartItem.item.id === itemToAdd.item.id
  //   );

  //   if (itemIndex !== -1) {
  //     const updatedCartItems = [...cart];
  //     updatedCartItems[itemIndex].count += 1;
  //     setCart(updatedCartItems);
  //   } else {
  //     setCart([...cart, { item: itemToAdd.item, count: 1 }]);
  //   }
  // };

  return (
    <>
      <Link to={`/product/${id}`} className="card mb-4 p-3">
        <img src={image} className="card-img-top" alt="..." height={200} />
        <div className="card-body">
          <h6 className="card-title">{title.slice(0, 25) + "..."}</h6>
          <b className="card-text">
            ${price}({rating.count})
          </b>
        </div>
      </Link>
    </>
  );
}
