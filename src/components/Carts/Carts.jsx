import React from "react";
import "./carts.css";
import cart1 from "../../assets/2.png";
import cart2 from "../../assets/3.png";
import cart3 from "../../assets/4.png";
import cart4 from "../../assets/5.png";
import { Cartbox } from "./Cartbox";

const Carts = () => {
  return (
    <>
      <div className="cart__section">
        <Cartbox logo={cart1} text={"Total School Buses"} count={3} />
        <Cartbox logo={cart2} text={"Moving Buses"} count={2} />
        <Cartbox logo={cart3} text={"Parked Buses"} count={1} />
        <Cartbox logo={cart4} text={"Idle Buses"} count={0} />
      </div>
    </>
  );
};

export default Carts;
