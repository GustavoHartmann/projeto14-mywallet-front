import StatementsContainer from "../../components/StatementsContainer";
import StatementsPageContainer from "./styles";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Statement from "../../components/Statement";

export default function Statements() {
  const [username, setUsername] = useState("");
  const [statementsArray, setStatementsArray] = useState([]);
  const { token } = useContext(AuthContext);

  async function getStatements() {
    const url = "http://localHost:5000/statements";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(url, config);

    const { user, statements } = response.data;

    setUsername(user.name);
    setStatementsArray(statements);
  }

  useEffect(() => {
    getStatements();
  }, []);

  return (
    <StatementsPageContainer>
      <h1>Olá, {username}</h1>
      <StatementsContainer statementsExist={statementsArray.length > 0}>
        {statementsArray.length > 0
          ? statementsArray.map((s) => <Statement key={s._id} statement={s} />)
          : "Não há registro de entrada ou saída"}
      </StatementsContainer>
      <span>
        <button>
          <CiCirclePlus />
          Nova Entrada
        </button>
        <button>
          <CiCircleMinus />
          Nova Saída
        </button>
      </span>
    </StatementsPageContainer>
  );
}
