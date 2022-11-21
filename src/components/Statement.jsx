import StatementContainer from "./StatementContainer";

export default function Statement({ statement }) {
  return (
    <StatementContainer isNegative={String(statement.value).startsWith("-")}>
      <p>{statement.day}</p>
      <p>{statement.description}</p>
      <p>{statement.value}</p>
    </StatementContainer>
  );
}
