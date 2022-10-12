import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="container-detail">
            <img src={item.img} alt="{item.nombre}" />
            <div className='container'>
                <h2>{item.nombre}</h2>
                <p className="parrafo-detail">{item.descripcion}</p>
                <ItemCount stock={10} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;
