import { Input } from "../Inputs";
import "./styles.css";
import square from "../../assets/images/square.png";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    
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
          />
          <Input
            label="Senha"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="btn_modal">Mostrar Senha</p>
          <button className="btn" onClick={handleLogin}>
            CONFIRMAR
          </button>
        </form>
      </div>
      <img src={square} alt="square.png" />
    </div>
  );
};
