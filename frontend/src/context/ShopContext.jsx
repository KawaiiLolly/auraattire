import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = "₹";
    const deliever_fee = 55;

    const value = {
        products, currency, deliever_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider