import * as React from "react";
import { Repository } from "../Repository";
import { IRepository } from "../Repository/Repository";
import "./index.css";

interface IRepositoryList {
  countRepos: string;
  repositories: IRepository[];
}

export const RepositoryList = ({
  countRepos,
  repositories,
}: IRepositoryList) => {
  return (
    <div className="repositories">
      <h2 className="repositories__title">Repositories ({countRepos})</h2>
      <div className="repositories__content">
        {repositories.map((repos: IRepository, index) => (
          <Repository key={index} {...repos} />
        ))}
      </div>
    </div>
  );
};