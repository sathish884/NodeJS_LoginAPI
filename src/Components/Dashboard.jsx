import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <div className="container p-5 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="card p-5">
          <h3 className='text-center'>
            Welcome to the Dashboard
          </h3><br />
          <Link to={'/'} style={{marginLeft:'auto', fontSize:'20px'}}>Logout</Link>
        </div>

      </div>
    </>
  )
}

export default Dashboard