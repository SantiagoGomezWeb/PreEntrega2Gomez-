import React, { useState } from 'react';

const ItemCount = ({ stock, inicial }) => {
    const [contador, setContador] = useState(inicial);

    const sumar = () => {
        // if (count < stock) {
        //     setCount(count + 1);
        // }
        
        contador < stock && setContador(contador + 1)
    };

    const restar = () => {
        // if (count > initial) {
        //     setCount(count - 1);
        // }
        contador > inicial && setContador(contador - 1)
    };

    return (
        <div className="container-detail">
            <div className="count-btn">
                <button className="btn btn-primary add-btn" disabled={contador === stock} onClick={sumar}> + </button>
                <p align="center">{contador}</p>
                <button className="btn btn-primary add-btn" disabled={contador === inicial} onClick={restar}> - </button>
            </div>
            <button className="btn btn-success add-btn">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
