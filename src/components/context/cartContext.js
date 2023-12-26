import { useReducer } from "react";
import { useEffect } from "react";
import { createContext , useContext} from "react";
import reducer from "../reducer/cartReducer";
const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("vikiCart");
    if(localCartData === []){
        return [];
    }
    else{
        return JSON.parse(localCartData);
    }
    
};
const initialState = {

    //cart: [],
    cart : getLocalCartData(),
    total_item: "",
    total_amount: "",
    Shipping_fee: 100,
};

const CartProvider = ({ children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleOnPlus = (id,title,imageUrl,price,allData) => {
        dispatch({ type: "ADD_TO_CART", payload: {id,title,imageUrl,price,allData} });

    };

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    
    }

    //To clear the cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART"})
    }



    //to add the data in localstorage
    //get vs set
    //First we set the data in localstorage then we get the data from localstorage 
    //here we r setting the data in localstorage
    useEffect(() => {
        localStorage.setItem("vikiCart", JSON.stringify(state.cart));
    
    },[state.cart]);

    return <CartContext.Provider value={{...state,handleOnPlus,removeItem,clearCart}}>
    {children}</CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext);

};

export { CartProvider, useCartContext};