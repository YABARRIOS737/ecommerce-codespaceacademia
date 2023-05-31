import React, { useEffect, useState } from "react";
import products from "./json/products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(item => item.id === parseInt(id)));
            }, 2000);
        })

        promesa.then((data) => {
            setItem(data);
        })
    }, [id]);

    return (
        <div className="container">
            <ItemDetail item={item}/>
            <ItemCount stockAvail={25} /> 
        </div>
    )
}

export default ItemDetailContainer;
