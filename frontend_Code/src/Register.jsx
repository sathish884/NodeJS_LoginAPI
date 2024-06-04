import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
        <div className="container p-5 d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
                <div className="card p-5" style={{ width: "25rem" }}>
                    <h4 className="text-center pb-3">Register User</h4>
                    <form action="">
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="userName" className="form-label">UserName</label>
                                <input type="text" className="form-control" id="userName" placeholder="Enter your username" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
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
                                <button type='submit' className='btn btn-primary' style={{width:"100%"}}>Submit</button>
                            </div>
                            <div className="col-12">
                            <Link className='pt-3' style={{float:"left"}} to={'/'}>Back to Home</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </>
  )
}

export default Register