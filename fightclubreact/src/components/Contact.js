function Contact() {

    return (
        <div className="Contact">
            <hr className="hr mt-5" />
            <div className="txtcontact">
                <p>Nom Prénom <br /> Responsable Club <br /> 0632543508</p>
                <h4 className="mt-5">OU</h4>
            </div>
            <div className="formcontact">
                <form className="form mt-5">
                    <div className="row g-3">
                        <div className="col">
                        <label>Nom</label>
                            <input type="text" className="form-control mt-1" aria-label="First name" />
                        </div>
                        <div className="col">
                        <label>Prénom</label>
                            <input type="text" className="form-control mt-1" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="row g-3 mt-2">
                        <div className="col">
                            <label>Email</label>
                            <input type="email" className="form-control mt-1" id="inputEmail3"></input>
                        </div>
                        <div className="col">
                            <label>Tel</label>
                            <input type="numero" className="form-control mt-1" id="inputNumero"></input>
                        </div>
                    </div>
                    <div class="row g-3 mt-1">
                        <label>Demandes</label>
                        <textarea class="form-control" id="demande"></textarea>
                    </div>
                    <button type="submit" className="btncontact">Envoyez</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;