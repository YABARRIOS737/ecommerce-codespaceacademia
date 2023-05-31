import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import products from "./json/products.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? products.filter(item => item.categoria === id) : products);
            }, 2000)
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);


    return (
        <div className="container py-5">
            <div className="row">
                <ItemList items={items} />
                {/* <ItemCount stockAvail={25} /> */}
                {/* <div className=" col-md-12 text-center">
                    <div id="custIL" className="alert alert-danger" role="alert">
                        <p>{greeting}</p>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default ItemListContainer;