function Navbar() {
    let Logout = () => {
        localStorage.clear();
        window.location.href = "/Accueil";
        }
    let Log;
    if (localStorage.getItem("token") !== null) {
        Log = <div className="position-absolute top-50 end-0 translate-middle-y"><a href="/Accueil" onClick={Logout}>Logout</a></div>
    }
    else {
        Log = <a href="/Connexion" className="position-absolute top-50 end-0 translate-middle-y" name="deco">Login</a>;
    }

    
    return (
        <div className="Navbar">
            <header className="navbar navbar">
                <div className="container d-flex flex-column justify-content-center">
                    <img className="logo" src="./images/logochefblanc.png" alt="logo" width="50" height="50" />
                    {Log}
                    <p className="tlogo">Fight Club</p>
                    
                </div>
            </header>
        </div>
        
    );
}

export default Navbar;