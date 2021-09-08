import * as React from "react";
import { Form } from "../common/Form";
import { IForm } from "../common/Form/Form";
import { Logo } from "../common/Logo";
import "./index.css";

interface IHeader extends IForm {
  logo: string;
}

export const Header = ({
  logo,
  img,
  userInput,
  onSearch,
  onSubmit,
}: IHeader) => (
  <header className="header">
    <div className="logo logo_circle">
      <Logo logo={logo} />
    </div>
    <Form
      img={img}
      userInput={userInput}
      onSearch={onSearch}
      onSubmit={onSubmit}
    />
  </header>
);