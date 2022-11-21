import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import GlobalStyleReset from "../styles/GlobalStyleReset";
import SignIn from "./Sign-in";
import SignUp from "./Sign-up";
import AuthProvider from "../context/AuthContext";
import Statements from "./Statements";
import NovaEntrada from "./NovaEntrada";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyleReset />
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/statements" element={<Statements />} />
          <Route path="/nova-entrada" element={<NovaEntrada />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
