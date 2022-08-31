import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3004/users/${id}`, user);
        navigate('/')
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3004/users/${id}`);
        setUser(result.data);
    };
    return (
        <div className='container mb-5'>
            <div className='row justify-content-md-center'>
                <div className="col-sm-8">
                    <h3 className='text-center mt-5 mb-2'>Edit User</h3>
                    <div className="shadow mx-auto p-5">
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="row">
                                <div className="form-group mb-3 col-6">
                                    <label className="form-label">Name</label>
                                    <input type="text"
                                        className="form-control from-control-lg"
                                        placeholder='Enter Your Name'
                                        value={name}
                                        name='name'
                                        onChange={e => onInputChange(e)}
                                    />
                                </div>

                                <div className="form-group mb-3 col-6">
                                    <label className="form-label">User Name</label>
                                    <input type="text"
                                        className='form-control from-control-lg'
                                        placeholder='Enter user Name'
                                        value={username}
                                        name="username"
                                        onChange={e => onInputChange(e)}
                                    />
                                </div>

                                <div className="form-group mb-3 col-6">
                                    <label className="form-label">Email</label>
                                    <input type="text"
                                        className='form-control from-control-lg'
                                        placeholder='Enter Email'
                                        value={email}
                                        name="email"
                                        onChange={e => onInputChange(e)}
                                    />
                                </div>

                                <div className="form-group mb-3 col-6">
                                    <label className="form-label">Phone</label>
                                    <input type="text"
                                        className='form-control from-control-lg'
                                        placeholder='Enter Phone Number'
                                        value={phone}
                                        name="phone"
                                        onChange={e => onInputChange(e)}
                                    />
                                </div>

                                <div className="form-group mb-3 col-12">
                                    <label className="form-label">wbsite</label>
                                    <input type="text"
                                        className='form-control from-control-lg'
                                        placeholder='Enter your Address'
                                        value={website}
                                        name="website"
                                        onChange={e => onInputChange(e)}
                                    />
                                </div>
                            </div>
                            <button className='btn btn-primary btn-block'>Add Users</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
