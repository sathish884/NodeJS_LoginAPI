import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="container p-5 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="card p-5" style={{ width: "25rem" }}>
                    <h4 className="text-center pb-3">Login User</h4>
                    <form action="">
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="userName" className="form-label">UserName</label>
                                <input type="text" className="form-control" id="userName" placeholder="Enter your username" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="type your password here" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button type='submit' className='btn btn-primary' style={{ width: "100%" }}>Login</button>
                            </div>
                            <div className="col-12">
                                <Link className='pt-3' style={{ float: "left" }} to={'/register-user'}>New Register</Link>
                                <Link className='pt-3' style={{ float: "right" }} to={'/forget-password'}>forget password</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login