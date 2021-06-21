import React from 'react';

import FormsSpecialist from './Containers/Forms';
import { Container } from './styles';

function Cadastro() {
  return (
    <div>
      <Container className="container">
        <FormsSpecialist />
      </Container>
    </div>
  );
}

export default Cadastro;
