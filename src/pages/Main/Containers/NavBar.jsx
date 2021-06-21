import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/img/logoafya.png';

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        id="mainNav"
      >
        <div className="container px-5">
          <img alt="logo afya" src={Logo} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="bi-list" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#funcionalidades">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#ensino-superior">
                  ensino superior
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#servicos">
                  serviços
                </a>
              </li>
            </ul>
            <Link to="/login">
              <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0">
                <span className="d-flex align-items-center">
                  <i className="bi-chat-text-fill me-2" />
                  <span className="small">Login</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default memo(NavBar);
