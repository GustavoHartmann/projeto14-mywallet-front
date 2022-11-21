import styled from "styled-components";

const StatementsContainer = styled.div`
  width: 100%;
  height: 400px;

  font-size: 20px;

  background-color: white;
  color: #868686;

  border-radius: 5px;

  display: ${(props) => (props.statementsExist ? "block" : "flex")};
  align-items: center;
  text-align: center;

  position: relative;

  overflow: scroll;

  div:last-child {
    width: 100%;

    font-size: 17px;

    padding: 5px 10px;

    background-color: white;

    border-top: 1px solid #868686;

    display: flex;
    justify-content: space-between;

    position: absolute;
    bottom: 0;
    z-index: 1;

    p:first-child {
      font-weight: bold;

      color: black;
    }

    p:last-child {
      font-weight: bold;

      color: ${(props) => (props.isNegative ? "#C70000" : "#03AC00")};
    }
  }
`;

export default StatementsContainer;
