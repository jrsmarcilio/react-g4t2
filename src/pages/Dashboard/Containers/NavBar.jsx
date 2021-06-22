import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import { FiLogOut } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

import Profile from "../../../assets/img/profile.png";
import { Container } from "../styles";

export default function NavBar() {
  const [redirect, setRedirect] = useState(false);
  // const userName = localStorage.getItem("nome");

  const Logout = () => {
    localStorage.clear("token");
    // localStorage.clear("nome");
    setRedirect(true);
  };

  return (
    <Container>
      {redirect && <Redirect to="/login" />}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Procurar"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />

            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <BsSearch />
              </button>
            </div>
          </div>
        </form>

        <Dropdown className="navbar-nav ml-auto">
          <Dropdown.Toggle variant="Info" id="dropdown-basic">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Lutchenca Medeiros
            </span>
            <img
              style={{ height: "2rem", width: "2rem" }}
              className="img-profile rounded-circle"
              src={Profile}
              alt="Foto de perfil"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Perfil</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Endereço</Dropdown.Item>
            <Dropdown.Item onClick={Logout}>
              <FiLogOut /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </Container>
  );
}
