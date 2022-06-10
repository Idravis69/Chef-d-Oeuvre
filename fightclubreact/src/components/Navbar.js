function Navbar() {
    return (
        <div className="Navbar">
            <header className="navbar navbar">
                <div className="container d-flex flex-column justify-content-center">
                    <img className="logo" src="./images/logochefblanc.png" alt="logo" width="50" height="50" />
                    <p className="tlogo">Fight Club</p>
                    <div class="position-absolute top-50 end-0 translate-middle-y"><a href="./Connexion">Login</a></div>
                </div>
            </header>
        </div>
        
    );
}

export default Navbar;