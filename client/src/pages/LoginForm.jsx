import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import loginIcon from "../assets/user.svg" //file-loader changed to 6.1.1 in package.json
import loginImg from "../assets/login.svg" //file-loader changed to 6.1.1 in package.json
import "../styles/loginForm.css"
import { useDispatch } from 'react-redux';
import { login } from '../adminDashboard/redux/apiCalls'

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState('')
   
    const handleSubmit = (e) => {
      e.preventDefault();
      login(dispatch, {username, password})
      navigate("/admin/home")
  }
    

   

  return (
    <Container className='loginForm mt-5'>
        <Row>
            <Col className='text-center mt-3 p-4'>
              <img src={loginIcon} alt="icon" className='icon-img w-100' />

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control mb-4"
                  name="username"
                  value={username}
                  placeholder='Enter Username'
                  onChange={(e) => setUsername(e.target.value)}                 
                  required />
                </div>

                <div className="form-group">
                  <input 
                  type="password" 
                  className="form-control mb-4"
                  name="password"
                  value={password}
                  placeholder='Enter Password'
                  onChange={(e) => setPassword(e.target.value)}
                  required />
                </div>


                <button
                  className='btn btn-user'
                >
                  Login
                </button>
              </form>
              
            </Col>
          
        </Row>
    </Container>
  )
}

export default LoginForm
