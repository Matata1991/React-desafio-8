import { useState, createContext } from "react";

export const cartContext = createContext( [] )

export default function CartContextProvider( { children } ) {
    
    const [cartList, setCartList] = useState([])

    function añadirAlCarrito(itemNuevo) {           let indexProducto = []
        let productoEnCarrrito = cartList.filter(producto => producto.item.id === itemNuevo.item.id)
        indexProducto = cartList.findIndex(producto => producto.item.id === itemNuevo.item.id)
        if(indexProducto === -1){
            setCartList([...cartList, itemNuevo])
        } else {
            itemNuevo.cantidad = itemNuevo.cantidad + productoEnCarrrito[0].cantidad;
            setCartList([itemNuevo])
            console.log(itemNuevo)
        }    
    }

    function vaciarCarrito() {
        setCartList([])
    }
    

    return (
        <cartContext.Provider value={ {
        cartList,
        añadirAlCarrito,
        vaciarCarrito
        } }>
            { children }
        </cartContext.Provider>
    )
}