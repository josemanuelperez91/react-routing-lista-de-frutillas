import React from "react";
import { FRUITS } from "../../constants/fruits.js";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { ID } = useParams();
  const fruit = FRUITS.find(fruit => ID === fruit.id);

  return (
    <div>
      <h3>{fruit.id}:</h3>
      <i>{fruit.name}</i>
      <p>
        <small>{fruit.kcal} kcal</small>
      </p>
    </div>
  );
};
export default Detail;
