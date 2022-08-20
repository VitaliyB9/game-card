import React, { useState } from "react";
import MainButton from "../Buttons/MainButton";

const CardLevel = (props) => {
  const [cards, setCards] = useState([
    {
      id: Math.random() - 0.5,
      body: Math.floor(Math.random() * 100),
    },
  ]);

  const newGame = () => {
    const startGame = {
      id: Math.random() - 0.5,
      body: Math.floor(Math.random() * 100),
    };
    setCards([...cards, startGame]);
  };
  return (
    <div>
      <MainButton onClick={newGame}>Start New Game</MainButton>
    </div>
  );
};

export default CardLevel;
