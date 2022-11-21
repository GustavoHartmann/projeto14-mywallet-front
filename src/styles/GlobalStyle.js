import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background-color: #8C11BE;
}

input:disabled, button:disabled {
    opacity: 0.9;
}
`;

export default GlobalStyle;
