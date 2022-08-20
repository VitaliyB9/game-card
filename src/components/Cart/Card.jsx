import React from "react";
import classes from "./cart.module.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className={classes.cards}>
        <p>{props.card.id}/</p>
        <h3>{props.card.body}</h3>
      </div>
    </div>
  );
};

export default Card;
