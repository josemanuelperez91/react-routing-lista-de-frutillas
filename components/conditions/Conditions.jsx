import React from "react";
import { Link } from "react-router-dom";

export default class Conditions extends React.Component {
  render() {
    return (
      <div>
        <button>
          <Link to="/dashboard"> Aceptar términos y condiciones </Link>
        </button>
      </div>
    );
  }
}
