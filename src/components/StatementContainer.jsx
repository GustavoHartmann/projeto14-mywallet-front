import styled from "styled-components";

const StatementContainer = styled.div`
  width: 100%;
  height: 25px;

  font-size: 16px;

  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p:nth-child(1) {
    color: #C6C6C6;
  }

  p:nth-child(2) {
    color: black;
  }

  p:nth-child(3) {
    color: ${props => props.isNegative ? "#C70000" : "#03AC00"};//
  }
`;

export default StatementContainer;
