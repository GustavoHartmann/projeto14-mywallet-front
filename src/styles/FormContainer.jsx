import styled from "styled-components";

const FormContainer = styled.form`
  width: 100%;

  font-size: 20px;

  margin-top: 50px;

  input {
    width: 100%;
    height: 58px;

    font-size: 20px;

    border: none;
    border-radius: 5px;

    margin-bottom: 15px;
    padding-left: 15px;
  }

  input::placeholder {
    font-style: italic;

    color: #868686;
  }

  input:focus {
    outline-color: black;
  }

  button {
    width: 100%;
    height: 46px;

    font-size: 20px;

    background-color: #a328d6;
    color: white;

    border: none;
    border-radius: 5px;

    margin-bottom: 35px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    text-align: center;

    font-size: 15px;

    color: white;
  }
`;

export default FormContainer;
