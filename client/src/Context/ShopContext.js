import { createContext, useContext } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const all_products = { all_product };

  return (
    <ShopContext.Provider value={{ all_products }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const shopContextValue = useContext(ShopContext);
  if (!shopContextValue) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return shopContextValue;
};
