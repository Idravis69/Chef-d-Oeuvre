import { useState } from "react";
import http from "../http";
import { useNavigate } from "react-router-dom";

function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();
    function Login(){
        http.post('/login', {
            email: email,
            password: password,
        }).then(res => {

            if(res.data.token != undefined ){
                navigation('/Accueil');
                localStorage.setItem('token', res.data.token);
                window.location.reload();
            }
            else{
                alert("erreur");
            }

        })
    }


    return (
        <div className="Connexion d-flex">
            <div class="containerconnexion">
                <h1>Connexion</h1>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label>Email</label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label>Mots de Passe</label>
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <input type="submit" onClick={Login} className="btnconnexion"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connexion;