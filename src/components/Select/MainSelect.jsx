import React from "react";
import classes from "./select.module.css";

const MainSelect = (props) => {
  return (
    <select {...props} className={classes.select}>
      <option value={4}>Easy</option>
      <option value={5}>Medium</option>
      <option value={6}>Hard</option>
    </select>
  );
};

export default MainSelect;
