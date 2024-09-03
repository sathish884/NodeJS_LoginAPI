import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import Register from './Components/Register'
import ForgetPassword from './Components/ForgetPassword'
import ResetPassword from './Components/ResetPassword'
import TokenVerify from './Components/TokenVerify'
import Dashboard from './Components/Dashboard'



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/verify-token' element={<TokenVerify />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
