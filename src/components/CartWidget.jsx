import React, { useContext } from 'react'
import { cartContext } from '../context/cartContext';

export const CartWidget = () => {

    const { cartList } = useContext(cartContext)
    console.log(cartList)
    return (
        <div>
            <center>
                <h1>Carrito</h1><br/>
                { cartList.map(item => <h3>Producto: {item.item.titulo}<br/> 
                Descripcion: {item.item.descripcion}<br/>
                Precio: {item.item.precio}<br/>
                Cantidad: {item.cantidad}<br/>
                </h3>)}
            </center>
        </div>
    )
}
export default CartWidget
