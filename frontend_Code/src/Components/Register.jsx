import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../APi'

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ name, email, password })
            // await axios.post('/api/auth/register', { firstName, lastName, email, password });
            alert('Registration successful.');
            navigate('/');

        } catch (err) {
            console.error('Registration Error:', err.response.data.message);
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center p-3" style={{ minHeight: '100vh' }}>
                <div className="row justify-content-center w-100">
                    <div className="card p-5 mx-auto" style={{ maxWidth: '35rem' }}>
                        <h5 className='text-center'>Register</h5>
                        <form onSubmit={handleSubmit}>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="name">First Name</label>
                                    <input type="text" className="form-control" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <button type='submit' className='btn btn-primary w-100' >Register</button>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12 d-flex justify-content-between">
                                    <Link to={'/'} style={{ fontSize: '16px' }}>Click here to login</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register