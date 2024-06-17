import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from '../components/typewrite';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:8080/match/login", {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        navigate("/home");
      } else {
        let errorMessage = await response.text();
        setError(errorMessage);
        console.log(response);
      }
    } catch (error) {
      setError("Failed to login. Please try again.");
      console.log(error);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4" style={{ width: '400px', border: 'none', boxShadow: 'none', minHeight: '200px' }}>
        <Typewriter style={{ fontSize: '24px' }} />
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <button type="submit" className="btn btn-success w-100" onClick={handleLogin}>Login</button>
          <button type="button" className="btn btn-secondary w-100 mt-3" onClick={handleSignup}>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
