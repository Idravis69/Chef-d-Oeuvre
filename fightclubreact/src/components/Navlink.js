function Navlink() {
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
                                <a className="nav-link" href="/Acceuil">Acceuil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Boutique">Boutique</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Tarifs">Tarifs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#formc">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navlink;