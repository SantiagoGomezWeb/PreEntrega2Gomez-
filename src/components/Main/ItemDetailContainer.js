import React, { useState,  useEffect} from 'react';
import { products } from '../../data/asyncMock';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    //estado
    const [item, setItem] = useState({})
    const { id } = useParams();

    //efecto
    useEffect(() => {
        const traerProducto = () => {
            return new Promise((res, rej) => {
                const producto = products.find(
                    (prod) => prod.id === Number(id)
                );

                setTimeout(() => {
                    res(producto);
                }, 500);
            });
        };
        traerProducto()
            .then((res) => {
                setItem(res);
            });
    }, [id]);
        
    return (
        <div className="itemListContainer">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;