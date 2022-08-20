import React from "react";
import AllCards from "./Card";

const ConditionCard = ({ onClick }) => {
  const Stasuses = {
    open: "isOpen",
    closed: "isClosed",
    done: "isDone",
    // fail: "isFail",
  };

  const classByStatus = (status = "closed") => {
    switch (status) {
      // case Stasuses.fail:
        // return "fail";
      case Stasuses.done:
        return "done";
      case Stasuses.closed:
        return "closed";
      case Stasuses.open:
        return "open";
    }
  };

  return (
    <div className={`${classByStatus(Stasuses)}`}>
      <AllCards onClick={onClick}></AllCards>
    </div>
  );
};

export default ConditionCard;
