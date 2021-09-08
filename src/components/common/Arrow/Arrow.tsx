import * as React from "react";
import "./index.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IArrow {
  onClickArrow: (
    target: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  arrowDirection: string;
}

export const Arrow = ({ arrowDirection, onClickArrow }: IArrow) => (
  <button
    className="pagination__arrow"
    onClick={(e) => onClickArrow(e)}
    data-direction={arrowDirection}
  >
    {arrowDirection === "left" ? (
      <FontAwesomeIcon className="arrow" icon={faChevronLeft} />
    ) : (
      <FontAwesomeIcon className="arrow" icon={faChevronRight} />
    )}
  </button>
);