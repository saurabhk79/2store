import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "../../Context";

import "./navbar.css";

const Navbar = () => {
  const { cart } = useContext(MyContext);
  return (
    <>
      <div className="nav-wrap">
        <h2>2store</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">Newsletter</Link>
        </div>

        <div className="">
          <span className="position-relative me-3">
            <MdShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {cart.length || 0}
              <span className="visually-hidden">Products</span>
            </span>
          </span>

          <span>Saurabh</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
