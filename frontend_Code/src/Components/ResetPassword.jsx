import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../APi';

function ResetPassword() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await resetPassword({email, password, confirmpassword});
            alert('Your password was reset successfully.');
            navigate('/');
        } catch (err) {
            console.error('Reset Password Error:', err.response?.data?.message || 'Failed to reset password');
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center p-3" style={{ minHeight: '100vh' }}>
                <div className="row justify-content-center w-100">
                    <div className="card p-5 mx-auto" style={{ maxWidth: '35rem' }}>
                        <h5 className='text-center'>Reset Password</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-5">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="password">New Password</label>
                                    <input type="password" className="form-control" name="password" placeholder='Enter new password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="confirmpassword">Confirm Password</label>
                                    <input type="text" className="form-control" name="confirmpassword" placeholder='Enter confirm password' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <button type='submit' className='btn btn-primary w-100'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword