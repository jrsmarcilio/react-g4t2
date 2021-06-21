import React from "react";
import { Button } from "react-bootstrap";

// import { Container } from './styles';

const Pagination = ({ patientPerPage, totalPatients, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPatients / patientPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Button
              onClick={() => paginate(number)}
              className="page-link"
              style={{ margin: 3 }}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
