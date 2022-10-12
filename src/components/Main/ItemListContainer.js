import { useState,  useEffect} from 'react';
import ItemList from './ItemList';
import { products } from '../../data/asyncMock';
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    //estado
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { nombreCategoria } = useParams();

    useEffect(() => {
        const traerProductos = () => {
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.categoria === nombreCategoria
                );
                const prod = nombreCategoria ? prodFiltrados : products;
                setTimeout(() => {
                    res(prod);
                }, 500);
            });
        };
        traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [nombreCategoria]);
    
    // if(loading) {
    //     return (
    //          <h1>Loading...</h1>
    //         // <div>
    //         //     <Spinner color="primary"/>
    //         // </div>
    //     )
    // }

    return (
        <main>
            <div className='item-list-container'>
                <ItemList items={items}/>
            </div>
        </main>
    )
}

export default ItemListContainer;