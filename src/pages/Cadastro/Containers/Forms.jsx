/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../../assets/img/logoafya.png";
import { Container } from "../styles";

import api from "../../../services/api";

function FormsSpecialist() {
  const [formData, setFormData] = useState([]);
  const [address, setAddress] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function getAddressApi() {
    await api
      .get(`https://viacep.com.br/ws/${address.cep}/json/`)
      .then((response) => {
        setAddress({
          cep: response.data.cep,
          logradouro: response.data.logradouro,
          bairro: response.data.bairro,
          cidade: response.data.localidade,
          estado: response.data.uf,
        });
      });
  }

  async function handleRegister(e) {
    e.preventDefault();
    console.log(formData);
    console.log(address);
    
    await api
      .post("/specialist", formData)
      .then(async (response) => {
        toast(response.data.message);

        console.log(response.data.especialista);
        await api
          .post("/specialist/address", address, {
            params: { id: await response.data.especialista.id },
          })
          .then((response) => {
            toast(response.data.message);
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
    <Container>
      <ToastContainer />
      {redirect && <Redirect to="/login" />}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-4 logo-afya">
            <img alt="logo-afya" src={Logo} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 texto">
            <p>
              Descubra todas as funcionalidades e serviços que a Afya pode
              oferecer a você e seu paciente.
            </p>
          </div>

          <div className="col-md-8">
            <form htmlRole="form" onSubmit={handleRegister}>
              <p className="dados">Dados Pessoais</p>

              <div className="form-group">
                <label htmlFor="InputName">
                  Nome Completo<span> *</span>
                </label>
                <input
                  style={{ width: 550 }}
                  type="text"
                  className="form-control"
                  id="InputName"
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                />
              </div>

              <fieldset className="grupo">
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
                  <label htmlFor="InputName">
                    Senha<span> *</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="InputName"
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

              <fieldset className="grupo" style={{ marginTop: 20 }}>
                <p className="dados">Endereço</p>
                <div className="form-group">
                  <label htmlFor="InputCep">
                    CEP<span> *</span>
                  </label>
                  <input
                    type="CEP"
                    className="form-control"
                    id="InputCep"
                    onChange={(e) =>
                      setAddress({ ...address, cep: e.target.value })
                    }
                  />
                </div>
                <div className="form-group" style={{ marginTop: 20 }}>
                  <button
                    type="button"
                    className="button"
                    style={{ width: 270, height: 50, marginTop: 5 }}
                    onClick={getAddressApi}
                  >
                    Buscar Endereço
                  </button>
                </div>
              </fieldset>

              <fieldset className="grupo">
                <div className="form-group">
                  <label htmlFor="InputCidade">
                    Cidade<span> *</span>
                  </label>
                  <input
                    type="cidade"
                    className="form-control"
                    id="InputCidade"
                    value={address.cidade}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputBairro">
                    Bairro<span> *</span>
                  </label>
                  <input
                    type="bairro"
                    className="form-control"
                    id="InputBairro"
                    value={address.bairro}
                  />
                </div>
              </fieldset>

              <fieldset className="grupo">
                <div className="form-group">
                  <label htmlFor="InputRua">
                    Rua<span> *</span>
                  </label>
                  <input
                    type="rua"
                    className="form-control"
                    id="InputRua"
                    value={address.logradouro}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputNumero">
                    Número<span> *</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="InputNumero"
                    onChange={(e) =>
                      setAddress({ ...address, numero: e.target.value })
                    }
                  />
                </div>
              </fieldset>

              <div className="form-group">
                <label htmlFor="InputUF">
                  UF<span> *</span>
                </label>
                <input
                  style={{ width: 550 }}
                  type="UF"
                  className="form-control"
                  id="InputUF"
                  value={address.estado}
                />
              </div>

              <div className="checkbox">
                <div className="col-md-4 login">
                  <h3>
                    Já possui cadastro?
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                        marginLeft: 10,
                        color: "#13132B",
                      }}
                    >
                      <span>Entre aqui.</span>
                    </Link>
                  </h3>
                </div>
                {/* <label>
                  <input type="checkbox" /> Eu li e concordo com os Termos de
                  Uso e Política de Privacidade
                </label> */}
              </div>
              <button type="submit" className="button" style={{ width: 550 }}>
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FormsSpecialist;
