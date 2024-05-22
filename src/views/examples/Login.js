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
import { useState } from 'react';

const Login = () => {
  const API_URL = "http://localhost:8080";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginRequest = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL + '/api/auth/Authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": email, "password": password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const token = data.data.token;
      localStorage.setItem('token', token);
      console.log(token); // Ajusta según la respuesta de tu API
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <main>
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
          </center>
        </form>
      </div>
    </main>
  );
};

export default Login;
