import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Social Sphere.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ullam rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non ipsum unde aspernatur.</p>
          <span>Do have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
