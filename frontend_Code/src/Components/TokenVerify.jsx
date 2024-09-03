import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {tokenVerify} from '../APi'

function TokenVerify() {
  const [token, setToken] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await tokenVerify({token})
          navigate('/reset-password');
      } catch (err) {
          console.error('Forgot Password Error:', err.response.data.message);
          setError( err.response.data)
      }
  };

  return (
      <>
          <div className="container d-flex justify-content-center align-items-center p-3" style={{ minHeight: '100vh' }}>
              <div className="row justify-content-center w-100">
                  <div className="card p-5 mx-auto" style={{ maxWidth: '35rem' }}>
                      <h5 className='text-center'>Verify Token</h5>
                      <form onSubmit={handleSubmit}>
                          <div className="row mb-3">
                              <div className="col-12">
                                  <label className='form-label' htmlFor="email">Token</label>
                                  <input type="text" className="form-control" name="token" value={token} onChange={(e) => setToken(e.target.value)} required />
                              </div>
                          </div>
                          <p>{error && error.message}</p>
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

export default TokenVerify