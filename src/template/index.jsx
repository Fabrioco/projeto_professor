import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import { Class } from "../pages/Class";
import { ContextValues } from "../context/ContextValues";
import { Board } from "../pages/Board";

function App() {
  return (
    <Router>
      <ContextValues>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/turma" exact Component={Class} />
          <Route path="/diretoria" exact Component={Board} />
        </Routes>
      </ContextValues>
    </Router>
  );
}

export default App;
