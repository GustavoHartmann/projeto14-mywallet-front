import StatementsContainer from "../../components/StatementsContainer";
import StatementsPageContainer from "./styles";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Statement from "../../components/Statement";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Statements() {
  const [username, setUsername] = useState("");
  const [statementsArray, setStatementsArray] = useState([]);
  const [balance, setBalance] = useState(0);
  const { token } = useContext(AuthContext);

  async function getStatements() {
    const url = "http://localHost:5000/statements";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(url, config);

      const { user, statements } = response.data;

      setUsername(user.name);
      setStatementsArray(statements);
      
      let value = 0;
      statements.forEach((s) => {
        value += s.value;
      });
      setBalance(value);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err.response.data,
      });
    }
  }

  useEffect(() => {
    getStatements();
  }, []);

  return (
    <StatementsPageContainer>
      <h1>Olá, {username}</h1>
      <StatementsContainer
        statementsExist={statementsArray.length > 0}
        isNegative={String(balance).startsWith("-")}
      >
        {statementsArray.length > 0
          ? statementsArray.map((s) => <Statement key={s._id} statement={s} />)
          : "Não há registro de entrada ou saída"}
        <div>
          <p>SALDO</p>
          <p>{balance}</p>
        </div>
      </StatementsContainer>
      <span>
        <Link to={"/nova-entrada"}>
          <button>
            <CiCirclePlus />
            Nova Entrada
          </button>
        </Link>
        <Link to={"/nova-saida"}>
          <button>
            <CiCircleMinus />
            Nova Saída
          </button>
        </Link>
      </span>
    </StatementsPageContainer>
  );
}
