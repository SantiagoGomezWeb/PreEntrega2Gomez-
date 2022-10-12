import React from "react";
import Item from "./Item";

const itemList = ( {items} ) => {
    return (
        <div className="item-list">
            {items.map((prod) => {
                return <Item prod={prod} key={prod.id} />;
            })}
        </div>
    )
}


export default itemList;