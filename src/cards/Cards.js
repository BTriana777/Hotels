import React from "react";
import Card from "../card/Card";

const Cards = ({ newListFiltered }) => {
  return (
    <div className="centerCards">
      <div className="containerCards">
        {newListFiltered.map((data) => {
          return <Card props={data} />;
        })}
      </div>
    </div>
  );
}
export default Cards;
