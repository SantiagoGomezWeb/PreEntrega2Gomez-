import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        // if (count < stock) {
        //     setCount(count + 1);
        // }
        
        count < stock && setCount(count + 1)
    };

    const restar = () => {
        // if (count > initial) {
        //     setCount(count - 1);
        // }
        count > initial && setCount(count - 1)
    };

    return (
        <div className="container-detail">
            <div className="count-btn">
                <button className="btn btn-primary" disabled={count === stock} onClick={sumar}> + </button>
                <p align="center">{count}</p>
                <button className="btn btn-primary" disabled={count === initial} onClick={restar}> - </button>
            </div>
            <button className="btn btn-success add-btn">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
