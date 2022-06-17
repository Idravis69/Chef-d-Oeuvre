import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function View(props) {
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = () => {
        http.get('/produits/' + id + '/edit').then((res) => {
            setInputs({
                Nom: res.data.Nom,
                Prix: res.data.Prix,
                Description: res.data.Description,
                image: res.data.image
            });
        });
    }
    return (

            <section class="product-body">
                <div class="left-item w-25">
                    <img src={inputs.image} alt="image article"/>
                </div>
                <div class="right-item">
                    <div class="product-title">
                        <h1 className="h1view">{inputs.Nom}</h1>
                    </div>
                    <p class="desc"><strong>Description</strong><br/>{inputs.Description}</p>
                    <span class="price">{inputs.Prix}</span>
                    <button class="btn btn-primary">Ajouter au panier</button>
                </div>
            </section>

        /*<div className="d-flex justify-content-center">
                        <div class="card">
                            <img className="d-flex justify-conten-center" src={inputs.image} width="40%" />
                            <h1 className="d-flex justify-content-start">{inputs.Nom}</h1>
                            <p className="d-flex justify-content-start">{inputs.Description}</p>
                            <p class="price">{inputs.Prix}</p>
                            <form>
                                <label for="size">Taille</label>
                                <select id="size">
                                    <option>L</option>
                                    <option>M</option>
                                    <option>S</option>
                                    <option>XS</option>
                                    <option>XL</option>
                                </select>
                                <button>Ajouter au panier</button>
                            </form>
                        </div>
                    </div>*/

    )
}