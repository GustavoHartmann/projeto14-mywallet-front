import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import FormContainer from "../../styles/FormContainer";
import NovaEntradaContainer from "./style";

export default function NovaEntrada() {
  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  async function makeNovaEntrada(e) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/statements`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(
        url,
        {
          value: inputValue,
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
    <NovaEntradaContainer>
      <h1>Nova entrada</h1>
      <FormContainer onSubmit={makeNovaEntrada}>
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
        <button type="submit">Salvar entrada</button>
      </FormContainer>
    </NovaEntradaContainer>
  );
}
