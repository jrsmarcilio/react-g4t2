import React, { useState, memo } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Redirect, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../../services/api";

import coracao from "../../../assets/img/healthcare.svg";

function Header() {
  const [formData, setFormData] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleRegister(e) {
    e.preventDefault();
    console.log(formData);

    await api
      .post("/specialist", formData)
      .then((response) => {
        toast(response.data.message);

        setTimeout(() => {
          setRedirect(true)
        }, 5000)
      })
      .catch((error) => {
        console.log(error);
        toast.error("error", {
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
    <>
      <ToastContainer />
      {redirect && <Redirect to="/login" />}
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <h1 className="display-1 lh-1 mb-3">
                  A maneira mais fácil de organizar seus atendimentos.
                </h1>
                <p className="lead fw-normal text-muted mb-5">
                  Nosso objetivo é ajudar você a ter a melhor experiência de
                  atendimento possível e, consequentemente, o seu paciente.
                  Conheça nossos serviços e nossa história
                </p>
                <Button variant="primary" onClick={handleShow}>
                  Cadastre-se
                </Button>
                <Link to="/login">
                  <button
                    style={{ marginLeft: 15 }}
                    type="submit"
                    className="btn btn-primary-login"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="masthead-device-mockup">
                <img alt="coracao" className="coracao" src={coracao} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <aside className="text-center bg-color">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
              <div className="h2 fs-1 text-white mb-4">
                Apoiamos o médico em seu desenvolvimento pessoal e profissional.
                Somos seu parceiro na jornada da carreira médica.
              </div>
            </div>
          </div>
        </div>
      </aside>

      <section className="cta">
        <div className="cta-content">
          <div className="container px-5">
            <h2 className="text-white display-1 lh-1 mb-4">
              Venha fazer parte da nossa história.
            </h2>
            <a
              className="btn btn-outline-light py-3 px-4 rounded-pill"
              href="!#"
              target="_blank"
            >
              Cadastre-se ou faça o login agora
            </a>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de Especialista</Modal.Title>
        </Modal.Header>
        <form htmlRole="form" onSubmit={handleRegister}>
          <Modal.Body>
            <p className="dados">Dados Pessoais</p>

            <fieldset className="grupo">
              <div className="form-group">
                <label htmlFor="InputName">
                  Nome Completo<span> *</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputName"
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="InputRegistro">
                  Registro<span> *</span>
                </label>
                <input
                  className="form-control"
                  id="InputRegistro"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, registro: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputSenha">
                  Senha<span> *</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="InputSenha"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, senha: e.target.value })
                  }
                />
              </div>
            </fieldset>

            <fieldset className="grupo">
              <div className="form-group">
                <label htmlFor="InputCelular">
                  Celular<span> *</span>
                </label>
                <input
                  type="cellphone"
                  className="form-control"
                  id="InputCelular"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, celular: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="InputTelefone">
                  Telefone<span> *</span>
                </label>
                <input
                  type="telephone"
                  className="form-control"
                  id="InputTelefone"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, telefone: e.target.value })
                  }
                />
              </div>
            </fieldset>

            <fieldset className="grupo">
              <div className="form-group">
                <label htmlFor="InputEmail">
                  Email<span> *</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputProfissao">
                  Especialidade<span> *</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputProfissao"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, profissao: e.target.value })
                  }
                />
              </div>
            </fieldset>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button type="submit" className="button" onClick={handleClose}>
              Enviar Dados
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default memo(Header);
