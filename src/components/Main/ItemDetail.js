import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="container-detail">
            <img src={item.img} alt="{item.nombre}" />
            <div className='container'>
                <h2 className='cardPrecio'>{item.nombre}</h2>
                <p className="parrafo-detail">{item.descripcion}</p>
                <ItemCount stock={item.stock} inicial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;
