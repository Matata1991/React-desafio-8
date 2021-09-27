import React, { useContext } from 'react'
import { cartContext } from '../context/cartContext';
import { Button } from 'react-bootstrap';

export const CartWidget = () => {

    const { cartList, vaciarCarrito } = useContext(cartContext)
    console.log(cartList)
    return (
        <div>
            <center>
                <h1>Carrito</h1><br/>
                <h2><Button onClick={vaciarCarrito} variant="primary">Vaciar Carrito</Button></h2><br/>
                { cartList.map(item => <h3>Producto: {item.item.titulo}<br/> Cantidad: {item.cantidad}</h3>)}
            </center>
        </div>
    )
}
export default CartWidget
