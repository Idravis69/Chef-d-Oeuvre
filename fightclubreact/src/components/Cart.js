import { useEffect } from "react";
import http from "../http";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigation = useNavigate();
    const [cart, setCart] = useState([]);

    
    useEffect(() => {
        http.get("/Cart").then(res => {
            setCart(res.data);
        }
        );
    }, []);

    const btnmessage = () => {
        alert("Votre commande a été prise en compte");
        navigation('/Accueil');
    }


    return (
        <div className="Cart">
            <h1> Panier </h1>
            
            <button className="btncontact" onClick={btnmessage}>Valider Commande</button>
            {cart.map(item => {
                return (
                    <div className="page">
                        <div id="store_cart">

                            <ul className="cart_item">

                                <li className="cart_img_col">
                                    <img src={item.Image}/>
                                </li>

                                <li className="cart_product_col">
                                    <p>{item.Nom}</p>
                                </li>

                                <li className="cart_options_col">
                                    <span>Quantity: </span>
                                    <input type="number" min="1"/>
                                </li>

                                <li className="cart_price_col">
                                    <h2>{item.Prix}</h2>
                                </li>
                                <li className="cart_del_col">
                                    <img src="https://i.imgur.com/bI4oD5C.png"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    

                    /*<div className="card">
                        <div className="card-body">
                            <img className="card-img-top w-25" src={item.Image}></img>
                            <h5 className="card-title">{item.Nom}</h5>
                            <p className="card-text">{item.Prix}</p>
                        </div>
                    </div>*/
                )
                
            }
            )}
        </div>
    );
}




export default Cart;