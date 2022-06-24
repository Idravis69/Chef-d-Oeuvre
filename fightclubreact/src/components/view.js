import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function View(props) {
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        FUser()
    }, []);

    const FUser = () => {
        http.get('/produits/' + id + '/edit').then((res) => {
            setInputs({
                Nom: res.data.Nom,
                Prix: res.data.Prix,
                Description: res.data.Description,
                Image: res.data.Image
            });
        });
    }

    const nom = inputs.Nom;
    const prix = inputs.Prix;

    const addcart = () => {
        console.log(nom, prix);
        http.post("/Addcart", {Nom: nom, Prix: prix})
    }

    let viewcartbtn = "";
    if (localStorage.getItem("token") != undefined) {
        viewcartbtn = (
            <div className="d-flex justify-content-center"><button onClick={addcart} className="btn btn-primary">Ajouter au panier</button></div>
        )
        }
    else {
        viewcartbtn = "";
    }
    return (

            <section class="product-body">
                <div class="left-item w-25">
                    <img src={inputs.Image} alt="image article"/>
                </div>
                <div class="right-item">
                    <div class="product-title">
                        <h1 className="h1view">{inputs.Nom}</h1>
                    </div>
                    <p class="desc"><strong>Description</strong><br/>{inputs.Description}</p>
                    <span class="price">{inputs.Prix}</span>
                    {viewcartbtn}
                </div>
            </section>
    )
}