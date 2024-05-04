import { Input } from "../../../components/Inputs";
import "./styles.css";
import square from "../../../assets/images/square.png";
import { useState } from "react";
import {
  emailPrincipal,
  passwordPrincipal,
} from "../../../Data/Principal/login";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePassword, setTypePassword] = useState("password");

  const handleLogin = () => {
    if (email === emailPrincipal && password === passwordPrincipal) {
      navigate("/diretoria");
    }
  };

  const handleShowPassword = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  return (
    <div className="body login">
      <div className="container">
        <h1 className="title_form">ENTRAR</h1>
        <form className="container__form">
          <Input
            label="Email"
            placeholder="Exemplo@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Input
            label="Senha"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={typePassword}
          />
          {typePassword === "password" ? (
            <p className="showPassword" onClick={handleShowPassword}>
              Mostrar Senha
            </p>
          ) : (
            <p className="showPassword" onClick={handleShowPassword}>
              Ocultar Senha
            </p>
          )}
          <Button text="Confirmar" onClickFunction={handleLogin} />
        </form>
      </div>
      <img src={square} alt="square.png" />
    </div>
  );
};
