import styled from "styled-components";

const StatementsContainer = styled.div`
  width: 100%;
  height: 400px;

  font-size: 20px;

  background-color: white;
  color: #868686;

  border-radius: 5px;

  display: ${props => props.statementsExist ? "block" : "flex"};
  align-items: center;
  text-align: center;
`;

export default StatementsContainer;
