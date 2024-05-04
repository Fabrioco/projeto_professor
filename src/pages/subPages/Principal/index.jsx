import React from "react";

import "./style.css";
import { Button } from "../../../components/Button";

export const Principal = () => {
  return (
    <div className="list_principal">
      <div>
        <div className="select_list">
          <Button text="EXCLUIDOS" />
          <select>
            <option value="PROFESSORES">PROFESSORES</option>
            <option value="1A">1°A</option>
            <option value="1B">1°B</option>
            <option value="1C">1°C</option>
          </select>
          <Button text="+ ADICIONAR" />
        </div>
        <div className="table">
          <div className="title_table">
            <p>RA</p>
            <p>NOME</p>
            <p>OPÇÕES</p>
          </div>
          <div className="container_scroll">
            {/* <div className="list_table">
              <p>123132</p>
              <p>NOME COMPLETO DO MELIANTE</p>
              <div>
                <Button text="ALTERAR" />
                <Button text="REMOVER" />
              </div>
            </div>
            <div className="list_table">
              <p>123132</p>
              <p>NOME COMPLETO DO MELIANTE</p>
              <div>
                <Button text="ALTERAR" />
                <Button text="REMOVER" />
              </div>
            </div>
            <div className="list_table">
              <p>123132</p>
              <p>NOME COMPLETO DO MELIANTE</p>
              <div>
                <Button text="ALTERAR" />
                <Button text="REMOVER" />
              </div>
            </div>
            <div className="list_table">
              <p>123132</p>
              <p>NOME COMPLETO DO MELIANTE</p>
              <div>
                <Button text="ALTERAR" />
                <Button text="REMOVER" />
              </div>
            </div>
            <div className="list_table">
              <p>123132</p>
              <p>NOME COMPLETO DO MELIANTE</p>
              <div>
                <Button text="ALTERAR" />
                <Button text="REMOVER" />
              </div>
            </div> */}
            <p>NINGUEM FOI CADASTRADO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
