import { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const contextValue = { products, setProducts, cart, setCart };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// MyProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default MyProvider;
