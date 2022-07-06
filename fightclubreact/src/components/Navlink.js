function Navlink() {
    let Panier;
    if (localStorage.getItem("token") !== null) {
        Panier = <div className="position-absolute top-50 end-0 translate-middle-y"><a href="/Cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg></a></div>
    }

    let CreateProduct;
    if (localStorage.getItem("role") == "admin" && localStorage.getItem("token") !== null) {
        CreateProduct = <a className="nav-link" href="/create">Crées Articles</a>
    }

    let registerbtn;
    if (localStorage.getItem("role") == "admin" && localStorage.getItem("token") !== null) {
        registerbtn = <a className="nav-link" href="/Inscription">Inscription</a>
    }

    return (
        <div className="Navlink">
            <nav className="back navbar navbar-expand-lg navbar-light d-flex">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/Accueil">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Boutique">Boutique</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Tarifs">Tarifs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Accueil#formc">Contact</a>
                            </li>
                            <li className="nav-item">
                                {registerbtn}
                            </li>
                            <li className="nav-item">
                                {CreateProduct}
                            </li>
                        </ul>
                        {Panier}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navlink;