import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import MainButton from "./components/Buttons/MainButton";
import MainSelect from "./components/Select/MainSelect";

function App() {
  const [size, setSize] = useState(4);
  const [game, setGame] = useState();

  const onChange = ({ target: { value } }) => {
    setSize(value);
  };

  const startGame = () => {
    const newGame = "";
    setGame(newGame);
  };

  return (
    <div className="app">
      <MainButton onClick={startGame}>Start New Game</MainButton>
      <MainSelect value={size} onChange={onChange} />
      <Board size={size} />
      <footer className="foot">
        Заипался делать <a href="https://vk.com/batishchev_v">Витлая</a> |{" "}
        <a href="https://github.com/kaz-yamada/Card-Match-Game">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
