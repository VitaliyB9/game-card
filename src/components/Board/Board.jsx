import React, { useState } from "react";
import { useEffect } from "react";
import classes from "./board.module.css";

// const card = {id, name, isOpen}

// first second
//   0     0       first = 1
//   1     0       secod = 1
//   1     1       ferst, second = 0

const randomCard = (width) => {
  const values = Array.from(
    { length: width * width },
    (_, i) => `${Math.floor(i / 2) + 1}`
  ).sort(() => Math.random() - 0.5);
  return values;
};
const Board = ({ size }) => {
  const [board, setBoard] = useState([]);
  // const [firstCard, setFirstCard] = useState({});

  useEffect(() => {
    setBoard(randomCard(size));
  }, [size]);

  return (
    <div className={classes.board}>
      {board.map((id, name, onClickAt) => (
        <div key={id} onClick={(_) => onClickAt(id)}>
          {name}
        </div>
      ))}
    </div>
  );
};

export default Board;
