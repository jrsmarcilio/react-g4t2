import React from "react";

// import { Container } from './styles';

const RegisterModal = ({ handleClose, show, children }) => {
  const showHide = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHide}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}></button>
      </section>
    </div>
  );
};

export default RegisterModal;
