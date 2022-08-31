import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import userimg from '../../imges/user.webp';

const View = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3004/users/${id}`);
        setUser(res.data)
    };


    return (
        <div className='container mb-5'>
            <div className='row justify-content-md-center'>
                <div className="col-sm-8">
                    <h3 className='text-center mt-5 mb-3'>User Details</h3>
                    <h5 className='view-data'>{user.name}</h5>
                    <div className="shadow row mx-auto pt-3  justify-content-md-center">
                        <div className='col-sm-3'>
                            <img src={userimg}  alt="profile-img" className='img-fluid p-3 pt-0'/>
                        </div>
                        <div className='col-sm-9'>
                            <table className='table'>
                            <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>User Name</td>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{user.phone}</td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td>{user.website}</td>
                            </tr>
                        </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default View
