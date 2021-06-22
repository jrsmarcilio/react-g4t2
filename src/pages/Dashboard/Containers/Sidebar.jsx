import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Test from "../../../assets/img/test.png";
import { Container, UlContent } from "../styles";

import api from "../../../services/api";

import { RiContactsLine } from "react-icons/ri";
import { MdSchedule } from "react-icons/md";

const Sidebar = () => {
  const [formRegister, setFormRegister] = useState([]);

  const [show, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  async function handleRegister(e) {
    e.preventDefault();

    await api
      .post("/patient", formRegister, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        toast(response.data.message);

        setTimeout(() => {
          setRedirect(true);
        }, 5000);
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
    <Container>
      <UlContent
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <ToastContainer />
        <Link
          to="/"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Afya Educacional</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Button className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Button>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Button
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Home</span>
          </Button>
        </li>
        <li className="nav-item">
          <Button
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Perfil</span>
          </Button>
        </li>
        <li className="nav-item">
          <Button
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <MdSchedule /> <span>Agendar Atendimento</span>
          </Button>
        </li>
        <li className="nav-item">
          <Button
            onClick={handleShowRegister}
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <RiContactsLine /> <span>Cadastrar Paciente</span>
          </Button>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src={Test}
            alt="símbolo-formulario"
          />
          <p className="text-center mb-2">
            Conheça também o nosso aplicativo e acesse o prontuário dos
            pacientes no celular
          </p>
          <Link
            className="btn btn-success btn-sm"
            href="https://github.com/renantoka/mobile-g4t2"
            target="_blank"
          >
            Baixe agora!
          </Link>
        </div>
        <Modal show={show} onHide={handleCloseRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro de Paciente</Modal.Title>
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
                      setFormRegister({ ...formRegister, nome: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="InputCpf">
                    CPF<span> *</span>
                  </label>
                  <input
                    className="form-control"
                    id="InputCpf"
                    required
                    onChange={(e) =>
                      setFormRegister({ ...formRegister, cpf: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputTelefone">
                    Telefone<span> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="InputTelefone"
                    required
                    onChange={(e) =>
                      setFormRegister({ ...formRegister, telefone: e.target.value })
                    }
                  />
                </div>

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
                      setFormRegister({ ...formRegister, celular: e.target.value })
                    }
                  />
                </div>

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
                      setFormRegister({ ...formRegister, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) =>
                      setFormRegister({
                        ...formRegister,
                        tipo_sanguineo: e.target.value,
                      })
                    }
                  >
                    <option selected>Tipo Sanguíneo</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </fieldset>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseRegister}>
                Fechar
              </Button>
              <Button type="submit" className="button" onClick={handleCloseRegister}>
                Enviar Dados
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </UlContent>
    </Container>
  );
};

export default Sidebar;
