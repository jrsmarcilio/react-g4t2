import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../../assets/img/logoafya.png";
import { Container } from "../styles";

import api from "../../../services/api";

function FormsLogin() {
  const [formData, setFormData] = useState([]);
  const [redirect, setRedirect] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    api
      .post("/login", formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("nome", response.data.userName);
        setRedirect(true);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  return (
    <Container className="container">
      <ToastContainer />
      {redirect && <Redirect to="/dashboard" />}
      <div className="container position-relative">
        <div className="row">
          <div className="row header justify-content-md-center">
            <img alt="logo-afya" id="logoafya" src={Logo} />
          </div>

          <div className="row">
            <div className="col-md-6">
              <p className="login">Log In</p>

              <form htmlRole="form" onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="InputRegister">Registro</label>
                  <input
                    type="text"
                    className="form-control"
                    id="InputRegister"
                    onChange={(e) =>
                      setFormData({ ...formData, registro: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="InputPassword">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="InputPassword"
                    onChange={(e) =>
                      setFormData({ ...formData, senha: e.target.value })
                    }
                  />
                </div>

                <div className="checkbox centralize col-12">
                  <label>
                    <input type="checkbox" /> Lembrar senha
                  </label>
                  <p className="forgot centralize">Esqueceu a senha?</p>
                </div>

                <button type="submit" className="button">
                  Login
                </button>
                <p className="registro">
                  Não é registrado ainda?
                  <Link
                    to="/cadastro"
                    style={{
                      textDecoration: "none",
                      color: "#13132B",
                      marginLeft: 10,
                    }}
                  >
                    <strong>Crie uma conta</strong>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 pink-background">
        <p className="texto">
          Um mundo com melhor <strong>educação, saúde e bem-estar.</strong> Faça
          parte da nossa história. Cadastre-se ou faça o login.
        </p>
      </div>
    </Container>
  );
}

export default FormsLogin;
