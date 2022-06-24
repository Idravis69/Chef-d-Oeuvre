import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function Edit(props) {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        FUser()
    },[]);

    const FUser= () =>{
        http.get('/produits/'+id+'/edit').then((res)=>{
            setInputs({
                Nom:res.data.Nom,
                Prix:res.data.Prix,
                Description:res.data.Description,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.put('/produits/'+id,inputs).then((res)=>{
            navigate('/Boutique');
        })
    }
    return (
        <div>
            <h2 className="d-flex justify-content-center">Editer Produits</h2>
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


                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>

    )
}