import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        const productIndex = cartProducts.findIndex((productInCart) => productInCart.id === product.id)
        setTotalProducts(totalProducts +  product.contador)
        setTotalPrice(totalPrice + product.price*product.contador)
        if (productIndex === -1){
            setCartProducts(cartProducts => [...cartProducts, product])    
          }else{
            const CartCopy = [...cartProducts];
                CartCopy[productIndex].contador = 
                    CartCopy[productIndex].contador + product.contador;
            setCartProducts (CartCopy);
            setTotalPrice(totalPrice + product)
          }
        }    

    const clear = () => {
        setCartProducts([])
        setTotalProducts(0)
    }

    const removeProductToCart = (id) => {
        const newCart = cartProducts.filter((product) => product.id !== id)
        setCartProducts (newCart)
    }


    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        clear,
        removeProductToCart,
        totalProducts,
        totalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider
export { CartContext }