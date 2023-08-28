import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Components/Footer";
import Navbar from "./Pages/Components/Navbar";
import Home from "./Pages/HomePage";
import NewsletterPage from "./Pages/NewsletterPage";
import ProductsPage from "./Pages/ProductsPage";
import Product from "./Pages/Product";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/newsletter" element={<NewsletterPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
