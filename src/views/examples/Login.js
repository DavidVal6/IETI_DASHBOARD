/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import '../../assets/css/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from 'services/authentication.js';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let token;

  const handleLoginRequest = async (event) => {
    event.preventDefault();
    await login({
      "email": email,
      "password": password
    });
    token = localStorage.getItem('token');
    if (typeof token !== 'undefined' && token !== null && token.trim() !== '') {
      navigate('/admin/index');
    }
  };

  // const apiCall = async (event) => {
  //   event.preventDefault();
  //   let data = await getAllPlants();
  //   console.log(JSON.stringify(data));
  // }


  return (
    <div className="login-box">
      <form>
        <div className="user-box">
          <input type="text" name="" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label>Password</label>
        </div>
        <center>
          <a href="/admin/index" onClick={handleLoginRequest}>
            LOGIN
            <span></span>
          </a>
          {/* <a href="/" onClick={apiCall}>
            TEST
            <span></span>
          </a> */}
        </center>
      </form>
    </div>
  );
};

export default Login;
