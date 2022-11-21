import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import FormContainer from "../../styles/FormContainer";
import NovaSaidaContainer from "./style";

export default function NovaSaida() {
  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  async function makeNovaSaida(e) {
    e.preventDefault();
    const url = "http://localHost:5000/statements";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(
        url,
        {
          value: -inputValue,
          description: inputDescription,
        },
        config
      );
      navigate("/statements");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err.response.data,
      });
    }
  }
  return (
    <NovaSaidaContainer>
      <h1>Nova saída</h1>
      <FormContainer onSubmit={makeNovaSaida}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Valor"
          required
          autoFocus
        />
        <input
          type="text"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          placeholder="Descrição"
          maxLength={20}
          required
        />
        <button type="submit">Salvar saída</button>
      </FormContainer>
    </NovaSaidaContainer>
  );
}
