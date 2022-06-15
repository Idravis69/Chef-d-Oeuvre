import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../http'

export default function Create() {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.post('/produits',inputs).then((res)=>{
            navigate('/');
        })
    }
    return (
        <div>
            <h2 className="d-flex justify-content-center">Nouveaux Produits</h2>
            <div className="row d-flex justify-content-center">
                <div className="container">
                    <div className="card p-4">
                        <label>Nom</label>
                        <input type="text" name="Nom" className="form-control mb-2"
                                value={inputs.Nom || ''}
                                onChange={handleChange}
                        />

                        <label>Prix</label>
                        <input type="text" name="Prix" className="form-control mb-2"
                            value={inputs.Prix || ''}
                            onChange={handleChange}
                        />

                        <label>Description</label>
                        <input type="text" name="Description" className="form-control mb-2"
                            value={inputs.Description || ''}
                            onChange={handleChange}
                        />

                        <label>Image</label>
                        <input type="text" name="Image" className="form-control mb-2"
                            value={inputs.Image || ''}
                            onChange={handleChange}
                        />

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Crée</button>
                    </div>
                </div>
            </div>
        </div>

    )
}