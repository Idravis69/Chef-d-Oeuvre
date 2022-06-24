import { useEffect } from "react";
import http from "../http";
import { useState } from "react";

function Cart() {

    const [cart, setCart] = useState([]);
    useEffect(() => {
        http.get("/Cart").then(res => {
            setCart(res.data);
        }
        );
}, []);


    return (
        <div className="Cart">
            {cart.map(item => {
                return (
                    <div className="card">
                        <div className="card-body">
                            
                            <h5 className="card-title">{item.Nom}</h5>
                            <p className="card-text">{item.Prix}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Cart;