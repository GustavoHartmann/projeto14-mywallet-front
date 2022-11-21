import SignInContainer from "./styles";
import logo from "../../images/MyWallet-logo.png";
import FormContainer from "../../styles/FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/AuthContext";

export default function SignIn() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  async function makeSignIn(e) {
    e.preventDefault();
    const url = "http://localHost:5000/sign-in";

    try {
      const response = await axios.post(url, {
        email: inputEmail,
        password: inputPassword,
      });

      setToken(response.data.token);

      navigate("/statements");
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: err.response.data.message,
      });
    }
  }

  return (
    <SignInContainer>
      <img src={logo} alt="Logo" />
      <FormContainer onSubmit={makeSignIn}>
        <input
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          placeholder="Email"
          required
          autoFocus
        />
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit">Entrar</button>
        <Link to={"/sign-up"}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </FormContainer>
    </SignInContainer>
  );
}
