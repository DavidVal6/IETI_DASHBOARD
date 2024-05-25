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
import 'assets/css/auth.css';
import React from "react";
import Login from 'views/examples/Login';
import agroGnomeLogo from 'assets/img/brand/agro_gnome_no_bg.png';


const Auth = (props) => {
  return (
    <div className="auth-body">
      <img className="logo_img" alt='agro_gnome_logo' src={agroGnomeLogo} />
      <p>¡Aumenta tus utilidades con la mejor solución para el agro Colombiano!</p>
      <h1>Iniciar Sesión</h1>
      <Login />
    </div>
  );
};

export default Auth;
