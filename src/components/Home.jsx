import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3004/users")
        setUsers(result.data)
    }


    const deleteUser = async id => {
        await axios.delete(`http://localhost:3004/users/${id}`);
        loadUser();
    };
    return (
        <div className='container'>
            <div className='py-4'>
                <h3 className='text-center mb-3'>Table data</h3>
                <table className="table border shadow table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                {/* <td>{user.address.city}</td> */}
                                <td>{user.website}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link className='btn btn-primary mr-2' to={`/users/view/${user.id}`}>View</Link>
                                    <Link
                                        className="btn btn-outline-primary mr-2"
                                        to={`/users/edit/${user.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        className="btn btn-danger" to="/"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home