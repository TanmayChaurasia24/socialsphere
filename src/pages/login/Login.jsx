import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return(
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Social Sphere.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ullam rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non ipsum unde aspernatur.</p>
            <span>Don't have an account?</span>
            <Link to="/register">
            <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password"/>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;
