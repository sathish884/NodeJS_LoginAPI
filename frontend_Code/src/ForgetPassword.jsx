import React from 'react'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  return (
    <>
     <div className="container p-5 d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
                <div className="card p-5" style={{ width: "25rem" }}>
                    <h4 className="text-center pb-3">Forget Password</h4>
                    <form action="">
                        
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="newPassword" className="form-label">New Password</label>
                                <input type="text" className="form-control" id="newPassword" placeholder="Enter your new password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="password" placeholder="type your confirm password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button type='submit' className='btn btn-primary' style={{width:"100%"}}><Link to={'/'}>Submit</Link></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </>
  )
}

export default ForgetPassword