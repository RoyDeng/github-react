import "./index.css";

interface IStatePage {
  img: string;
  title: string;
  itsReposList?: boolean;
}

export const StatePage = ({ img, title, itsReposList }: IStatePage) => (
  <div className={itsReposList ? "state-page-empty" : "state-page"}>
    <img src={img} className="state-page__img" alt="" />
    <p className="state-page__text">{title}</p>
  </div>
);