import React from "react";
import { Link } from 'react-router-dom';


    const Item = ({ prod }) => {
    return (
        <article className="card">
            <img src={prod.img} alt={prod.nombre} style={{ width: 250 }} />
            <div className="card-info">
                <h2 className="card-titulo">{prod.nombre} </h2>
                <h4 className="card-precio">${prod.precio}</h4>
                <h5>#{prod.categoria}</h5>
                <Link  to={`/item/${prod.id}`} className='detalle__link'>Ver detalle</Link>
            </div>
        </article>            
    )
}


export default Item;