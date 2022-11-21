import SignUpContainer from "./style";
import logo from "../../images/MyWallet-logo.png";
import FormContainer from "../../styles/FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function SignUp() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirmation, setInputPasswordConfirmation] =
    useState("");
  const [disabledState, setDisabledState] = useState(false);

  const navigate = useNavigate();

  async function makeSignUp(e) {
    e.preventDefault();
    const url = "http://localHost:5000/sign-up";

    try {
      await axios.post(url, {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
        passwordConfirmation: inputPasswordConfirmation,
      });

      setDisabledState(true);

      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err.response.data,
      });
    }
  }

  return (
    <SignUpContainer>
      <img src={logo} alt="Logo" />
      <FormContainer onSubmit={makeSignUp}>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Nome"
          required
          autoFocus
          disabled={disabledState}
        />
        <input
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          placeholder="Email"
          required
          disabled={disabledState}
        />
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Senha"
          required
          disabled={disabledState}
        />
        <input
          type="password"
          value={inputPasswordConfirmation}
          onChange={(e) => setInputPasswordConfirmation(e.target.value)}
          placeholder="Confirme a senha"
          required
          disabled={disabledState}
        />
        <button type="submit" disabled={disabledState}>
          Cadastrar
        </button>
        <Link to={"/"}>
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </FormContainer>
    </SignUpContainer>
  );
}
