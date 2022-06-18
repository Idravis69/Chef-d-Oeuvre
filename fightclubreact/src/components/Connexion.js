import { useState } from "react";
import http from "../http";

function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function Login(){
        http.post('/login', {
            email: email,
            password: password,
        }).then(res => {
            if(res.status === 200){
                console.log(res);
                //window.location.href = '/Acceuil';
                
                localStorage.setItem('name', res.data.user.name);
                console.log("idris");
            }
            else{
                console.log("erreur");
            }

        })
    }


    return (
        <div className="Connexion d-flex">
            <div class="containerconnexion">
                <h1>Connexion</h1>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label>email</label>
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