import { useState } from "react";
import http from "../http";

function Inscription() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

function Register(){
    console.log(email, password, name);
    http.post('/register', {
        email: email,
        password: password,
        name: name
    }).then(res => console.log(res))



    }
    return (
        <div className="Connexion d-flex">
            <div class="containerconnexion">
                <h1>Inscription</h1>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label>Pseudo</label>
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="form-control"/>
                    </div>
                </div>
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
                        <input type="submit" onClick={Register} className="btnconnexion"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inscription;