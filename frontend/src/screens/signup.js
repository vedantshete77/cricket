import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from '../components/typewrite';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ph, setPh] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:8080/match/signup", {
        method: 'POST',
        body: JSON.stringify({ name, email, ph, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        navigate("/");
      } else {
        let errorMessage = await response.text();
        setError(errorMessage);
        console.log(response)    //////////////////////////////////////////////////////////////////////////////////////////
      }
    } catch (error) {
      setError("Failed to signup. Please try again.");
      console.log(error);
    }
  };
  const handleLogin=()=>{
      navigate("/")
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4" style={{ width: '400px', border: 'none', boxShadow: 'none' }}>
        <Typewriter />
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName" onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="exampleInputPhone" onChange={(e) => setPh(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success w-100" onClick={handleSubmit}>Submit</button>
          <button type="button" className="btn btn-secondary w-100 mt-3" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
