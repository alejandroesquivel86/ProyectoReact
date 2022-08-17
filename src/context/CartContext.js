import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    console.log("cartProducts: ", cartProducts)

    const addProductToCart = (product) => {
        const productIndex = cartProducts.findIndex((productInCart) => productInCart.id === product.id)
        console.log("productIndex: ", productIndex)
        if (productIndex === -1){
            setCartProducts(cartProducts => [...cartProducts, product])            
          }else{
            const CartCopy = [...cartProducts];
                CartCopy[productIndex].contador = 
                    CartCopy[productIndex].contador + product.contador;
                    console.log("CartCopy: ", CartCopy)
            setCartProducts (CartCopy);
          }
        }    

    const clear = () => {setCartProducts([])}

    const removeProductToCart = (id) => {
        const newCart = cartProducts.filter((product) => product.id !== id)
        setCartProducts (newCart)
    }


    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        clear,
        removeProductToCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider
export { CartContext }