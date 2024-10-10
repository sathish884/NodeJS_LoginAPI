import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { forgetPassword } from '../APi';

function ForgetPassword() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await forgetPassword({ email })
            alert('Check your email for instructions to reset your password.');
            navigate('/verify-token');
        } catch (err) {
            console.error('Forgot Password Error:', err.response.data.message);
            setError(err.response.data)
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center p-3" style={{ minHeight: '100vh' }}>
                <div className="row justify-content-center w-100">
                    {error ? (<div className="alert alert-danger text-center" role="alert" style={{ maxWidth: '35rem', color: 'red' }}>
                        <b>{error.message}</b>
                    </div>) : ""}
                    <div className="card p-5 mx-auto" style={{ maxWidth: '35rem' }}>
                        <h5 className='text-center'>Forgot Password</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <button type='submit' className='btn btn-primary w-100'>Send Reset Link</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword