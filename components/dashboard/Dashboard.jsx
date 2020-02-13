import React from "react";
import { FRUITS } from "../../constants/fruits.js";
import { Link } from "react-router-dom";

export default class Dashboard extends React.Component {
  render() {
    return (
      <ul>
        {FRUITS.map(fruit => {
          return (
            <li key={fruit.id}>
              <Link to={`/detail/${fruit.id}`}>{fruit.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
