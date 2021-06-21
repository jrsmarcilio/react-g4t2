import React from "react";
import { Table } from "react-bootstrap";

// import { Container } from './styles';

const Patients = ({ patients }) => {
  return (
    <>
      <Table striped bordered hover style={{ width: "62rem" }}>
        <thead>
          <tr>
            <th>ID </th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Tipo de Sangue</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr className="border-left-primary shadow py-2" key={patient.key}>
              <td>{patient.id}</td>
              <td className="text-ml  font-weight-bold text-primary text-uppercase">
                {patient.nome}
              </td>
              <td className="font-weight-bold text-gray-800">{patient.cpf}</td>
              <td className="font-weight-bold text-gray-800">
                {patient.tipo_sanguineo}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Patients;
