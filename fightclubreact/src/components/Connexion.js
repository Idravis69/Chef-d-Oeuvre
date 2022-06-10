function Connexion() {
    return (
        <div className="Connexion d-flex">
            <div class="containerconnexion">
                <h1>Connexion</h1>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label>Pseudo</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label>Mots de Passe</label>
                        <input type="password" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <input type="submit" className="btnconnexion"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connexion;