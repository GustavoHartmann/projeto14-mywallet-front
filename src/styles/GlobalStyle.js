import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
}

h1 {
    font-size: 26px;
    font-weight: bold;

    color: white;
}

input:disabled, button:disabled {
    opacity: 0.9;
}
`;

export default GlobalStyle;
