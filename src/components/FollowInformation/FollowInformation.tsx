import * as React from "react";
import "./index.css";

interface IFollowInformation {
  followImg: string;
  follow: string;
}

export const FollowInformation = ({
  followImg,
  follow,
}: IFollowInformation) => (
  <div className="user-information__follow">
    <img src={followImg} alt="follow" className="follow__img" />
    <p className="follow__text">{follow} following</p>
  </div>
);