import React, {Fragment} from "react";
import Item from "../Item/Item"
import ItemListFilter from "./../ItemListFilter/ItemListFilter"
import "./ItemList.css";

const ItemList = ({item, type})=>{
    const products = item
    return(
        <Fragment>
            <h3>Productos</h3>
            <ItemListFilter type={type}/>
            <div className="cardContainer" id="cardContainer">
                {products.map(x => <Item item={x} key={"item"+x.name+x.id}/>)}
            </div>
        </Fragment>
    )
}


export default ItemList