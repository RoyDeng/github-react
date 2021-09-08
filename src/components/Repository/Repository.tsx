import "./index.css";

export interface IRepository {
  name: string;
  description: string;
  html_url: string;
}

export const Repository = ({ name, description, html_url }: IRepository) => (
  <div className="repositories__row">
    <a
      className="repositories__row-title"
      href={html_url}
      rel="noreferrer"
      target="_blank"
    >
      {name}
    </a>
    <p className="repositories__row-text">{description}</p>
  </div>
);
