import styled from 'styled-components';

export const Container = styled.div`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@700&display=swap');
  }
  display: flex;
  margin: 80px auto;
  width: 100%;

  :root {
    background-color: white;
    font-family: monospace, Helvetica, sans-serif;
    margin: 0;
    height: 100%;
  }

  .header {
    background-color: white;
    padding: 10px;

    img {
      width: 20em;
    }
  }
  .Container-fluid {
    width: 100%;
    height: 100%;
    background-color: rebeccapurple;
  }

  .login {
    font-size: 52px;
    font-family: 'Heebo', sans-serif;
    padding: 50px 10px 10px 5px;
    width: 100%;
  }

  .texto {
    color: white;
    padding: 5px 10px 10px 10px;
    text-align: center;
    margin: 10px;
    width: 40rem;
    font-size: 28px;
  }

  .pink-background {
    display: flex;
    margin: 0 auto;
    background-color: #d40054;
    border-radius: 20px;
    width: 60vh;
  }

  .form-group {
    margin-top: auto;
    font-weight: bold;
    padding: 10px;
    width: 40rem;
  }

  .form-control {
    box-shadow: 5px 5px 5px #dddd;
  }

  .forgot {
    font-weight: bold;
    text-align: right;
    color: #d40054;
  }

  .centralize {
    width: 40rem;
  }

  .password {
    display: flex;
    flex-direction: row;
  }

  .button {
    background-color: black;
    border: none;
    width: 40rem;
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

  .registro {
    padding: 10px;
    width: 40rem;
    text-align: center;
    cursor: 'pointer';

    strong:hover {
      color: #d40054;
    }
  }
`;
