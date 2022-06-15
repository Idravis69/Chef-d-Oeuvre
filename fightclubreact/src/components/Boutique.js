import { useState, useEffect } from "react";
import http from "../http"
import { Link } from "react-router-dom";

export default function Boutique() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('/produits').then(res => {
            setUsers(res.data);
        })
    }




    const deleteUser = (id) => {
        http.delete('/produits/' + id).then(res => {
            fetchAllUsers();
        })
    }



    return (
        <div className="d-flex justify-content-center align-items-center container">
            <div className='container'>
                <div className='row d-flex justify-center'>
                    {users.map(user => {
                        return (

                            

                            <div className='cardsp col-md-3 col-sm-6 d-flex flex-column'>
                                <img src={user.image} className='w-100 mt-1'></img>
                                <p className='mt-1'>{user.Nom}</p>
                                <div className='d-flex mt-1 '>
                                </div>
                                <p className='mt-1'>{user.Prix}</p>
                                <Link className="btn btn-info" to={{ pathname: "/edit/" + user.id }}>Edit</Link>&nbsp;
                                <Link className="btn btn-primary" to={{ pathname: "/view/" + user.id }}>View</Link>&nbsp;
                                <button type="button" className="btn btn-danger"
                                    onClick={() => { deleteUser(user.id) }}
                                >Delete</button>

                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}