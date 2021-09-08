import * as React from "react";
import "./index.css";

interface ILogo {
  logo: string;
}

export const Logo = ({ logo }: ILogo) => (
  <img src={logo} alt="logo" className="logo__img"></img>
);