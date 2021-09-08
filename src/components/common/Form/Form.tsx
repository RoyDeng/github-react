import * as React from "react";
import { ChangeEvent, FormEvent } from "react";
import "./index.css";

export interface IForm {
  img: string;
  userInput: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => Promise<void>;
}

export const Form = ({ img, userInput, onSearch, onSubmit }: IForm) => (
  <form className="search-form" onSubmit={onSubmit} method="GET">
    <button className="search-form__button">
      <img className="search-form__img" src={img} alt="Search" />
    </button>
    <input
      className="search-form__input"
      value={userInput}
      onChange={onSearch}
    ></input>
  </form>
);