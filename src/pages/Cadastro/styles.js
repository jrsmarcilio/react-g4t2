import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

  label {
    span {
      color: #d40054;
    }
  }


  :root {
    background-color: white;
    font-family: monospace, Helvetica, sans-serif;
  }

  html,
  body {
    margin: 0;
    height: 100%;
  }
  .container-fluid {
    height: 100%;
    width: 100%;
  }

  .dados {
    font-size: 24px;
    color: #d40054;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    text-align: left;
  }
  .login {
    padding: 10px;
    margin-top: auto;
    width: 100%;
    color: '#13132B';

    span:hover {
      color: #d40054;
    }
  }

  .logo-afya {
    text-align: right;
    padding: 10px;
  }

  .texto {
    padding: 10px;
    background-color: #d40054;
    color: white;
    border-top-right-radius: 50px;

    p {
      margin-top: 50px;
      font-weight: bold;
      font-size: 40px;
    }
  }
  #InputNome {
    display: flex;
    justify-content: center;
    width: 60%;
    text-align: center;
  }
  #InputTipo {
    display: flex;
    width: fit-content;
  }

  #InputComplemento {
    display: flex;
    width: 38%;
  }

  .form-control {
    box-shadow: 3px 3px 5px #dddd;
  }

  label {
    margin-top: 5px;  
  }

  .button {
    background-color: black;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    transition-duration: 0.4s;
  }

  .button:hover {
    background-color: #d40054;
    color: white;
  }

  fieldset.grupo .form-group {
    float: left;
    margin-right: 0.5em;
  }
`;
