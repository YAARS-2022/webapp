import React from "react";
export const Cartbox = (props) => {
  const { logo, text, count } = props;
  return (
    <div className="cart">
      <img src={logo} className="cart__img"></img>
      <div className="text__section">
        {text} <br />
        <span className="number">{count}</span>
      </div>
    </div>
  );
};
