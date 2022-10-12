import { useState,  useEffect} from 'react';
import { Spinner } from 'react-bootstrap';

const ItemListContainser = ({greeting}) => {
    //estado
    const [loading, setLoading] = useState(true)

    //efecto
    
    if(loading) {
        return (
            // <h1>Loading...</h1>
            <div>
                <Spinner color="primary"/>
            </div>
        )
    }

    return (
        <div>
            {/* <h2>{greeting}</h2> */}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainser;