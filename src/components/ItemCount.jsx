import React, { useState } from "react";

const ItemCount = ({stockAvail}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockAvail);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if ((stock> 1) && (counter <= stock)) {
            console.log("Has agregado : " + counter + " productos al carrito");
            setStock(stock - counter);
            setCounter(0);
        } 
    }

    return (
        <div className="container">
            <div className="row mb-2">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" onClick={decrementarStock}>-</button>
                            <button type="button" className="btn btn-primary">{counter}</button>
                            <button type="button" className="btn btn-primary" onClick={incrementarStock}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <button className="Basic outlined example btn btn-primary" onClick={onAdd}>Agregar al Carrito</button>
                    </div>
            </div>
        </div>
    )
}

export default ItemCount;
