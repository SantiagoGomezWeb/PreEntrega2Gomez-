import React from "react";
import carritoImg from '../../img/carrito.png'

const Cart = () => {
    return (
            <div className='itemListContainer'>
                <article className="card">
                    <img src={carritoImg} alt="" />
                </article> 
                <div className="cardInfo">
                    <h2 className="cardPrecio">Aqui va el Carrito</h2>                
                </div>

            </div>
    )
}

export default Cart;