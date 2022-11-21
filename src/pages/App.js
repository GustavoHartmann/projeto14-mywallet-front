import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import GlobalStyleReset from "../styles/GlobalStyleReset";
import SignUp from "./Sign-up";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyleReset />
      <GlobalStyle />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
