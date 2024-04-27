import { Input } from "../Inputs";
import "./styles.css";

export const Login = () => {
  return (
    <div className="container">
      <h1 className="title_form">ENTRAR</h1>
      <form className="container__form">
        <Input label="RA" placeholder="1234567" />
        <Input label="CPF" placeholder="111.111.111-11" />
        <button className="btn">CONFIRMAR</button>
      </form>
    </div>
  );
};
