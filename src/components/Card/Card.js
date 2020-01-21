import React from "react";
import "./Card.css";

const Card = props => (
  <div className="col-md-2 col-sm-3 col-6">
    <div
      className="card"
      value={props.id}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="img-container">
        <img alt={props.card} src={props.image} />
      </div>
    </div>
  </div>
);

export default Card;