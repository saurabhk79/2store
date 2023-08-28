import Newsletter from "./Components/Newsletter";
import Products from "./Components/Products";
import "./home.css";

import { MdCreditCard } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { PiShieldCheck } from "react-icons/pi";
import { TiTick } from "react-icons/ti";

const Home = () => {
  return (
    <div className="wrapper">
      <Hero />
      <Products />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Home;

function Hero() {
  return (
    <section className="hero text-white">
      <h1>2store</h1>
      <h4>The modern store</h4>
      <h6 style={{ color: "#5DDA3E" }}>#FreeDelivery</h6>

      <div>
        <button>See Products!</button>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <h2 className="text-center my-4">We guarantee you</h2>
      <div className="d-sm-flex justify-content-between d-block">
        <div className="d-flex mb-3">
          <TbTruckDelivery size={50} color={"#5DDA3E"} />
          <div>
            <b>Free delivery</b> <br />
            <small>Free shipping on all.</small>
          </div>
        </div>
        <div className="d-flex mb-3">
          <MdCreditCard size={50} color={"#5DDA3E"} />
          <div>
            <b>Money Guarantee</b> <br />
            <small>15 days money back</small>
          </div>
        </div>
        <div className="d-flex mb-3">
          <TiTick size={50} color={"#5DDA3E"} />
          <div>
            <b>Verified Products</b> <br />
            <small>Products checked thoroughly</small>
          </div>
        </div>
        <div className="d-flex mb-3">
          <PiShieldCheck size={50} color={"#5DDA3E"} />
          <div>
            <b>Secure payment</b> <br /> <small>Payments are secured</small>
          </div>
        </div>
      </div>
    </section>
  );
}
