import React from "react";
import Logo from "../assets/img/logoPokemon.png";
import { Button } from "../components/Button/Button";
import "./main.scss";

export const Main = () => {
  return (
    <div className="main">
      <Button link={"/home"} name={"ENTER"} classname={"primary"} />
      <img src={Logo} alt="PruebaInicio" width="680" height="500" />
    </div>
  );
};
