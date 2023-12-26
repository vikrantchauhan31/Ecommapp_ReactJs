


const cartReducer = ( state, action) => {
    if(action.type === "ADD_TO_CART") {
        let {id,title,imageUrl,price,allData} = action.payload;
        // console.log("allData = "+allData)
        // console.log("price = "+price)
        console.log("imageUrl = "+imageUrl)
    

        let cartProduct;

        cartProduct ={
            id: id,
            title: title,
            image: imageUrl,
            price: price,
        }
        // console.log("cartProduct = "+cartProduct.id)
        return {
            ...state,
            cart: [...state.cart, cartProduct],
            
        }
    }

    if(action.type === "REMOVE_ITEM")
    {
        let updatedCart = state.cart.filter((item) => item.id !== action.payload);
        return {
            ...state,
            cart:updatedCart,
        }
    }
    //to clear the cart
    if(action.type === "CLEAR_CART")
    {
        return {
            ...state,
            cart:[],
        }
    }
    return state;
}

export default cartReducer;
