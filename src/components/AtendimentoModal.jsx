import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../services/api";

const AtendimentoModal = ({ className, modalRef }) => {
  const [formData, setFormData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleRegister(e) {
    e.preventDefault();
    console.log(formData);

    await api
      .post("/patient", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        toast(response.data.message);

        // setTimeout(() => {
        //   setRedirect(true);
        // }, 5000);
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
    <div className={className} ref={modalRef}>
      <Modal show={show} onHide={handleClose}>
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
                    setFormData({ ...formData, nome: e.target.value })
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
                    setFormData({ ...formData, cpf: e.target.value })
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
                    setFormData({ ...formData, telefone: e.target.value })
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
                    setFormData({ ...formData, celular: e.target.value })
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
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tipo_sanguineo: e.target.value,
                    })
                  }
                >
                  <option selected>Tipo Sangu??neo</option>
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
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button type="submit" className="button" onClick={handleClose}>
              Enviar Dados
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AtendimentoModal;
