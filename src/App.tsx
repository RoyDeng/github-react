import React, { FormEvent, useEffect, useState } from "react";
import logo from "./images/logo.svg";
import search from "./images/search.svg";
import initialStateImage from "./images/big-search.svg";
import notfound from "./images/notfound.svg";
import "./App.css";
import { StatePage } from "./components/common/StatePage";
import { Header, UserCard, Pagination } from "./components";
import { createPages, getLastPage, getNewPage } from "./helpers/helpers";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getRepos, getUser } from "./actions/repos";
import { setCurrentPage, setInitialState } from "./reducers/reposReducer";
import { Loading } from "./components/common/Loading/Loading";


function App() {

  const dispatch = useDispatch();

  const initialState = useSelector((state: RootStateOrAny) => state.repos.initialState);
  const repos = useSelector((state: RootStateOrAny) => state.repos.items);
  const currentPage = useSelector(
    (state: RootStateOrAny) => state.repos.currentPage
  );
  const perPage = useSelector((state: RootStateOrAny) => state.repos.perPage);
  const totalCount = useSelector(
    (state: RootStateOrAny) => state.user.totalCount
  );
  const user = useSelector((state: RootStateOrAny) => state.user.user);
  const isFetchingRepos = useSelector(
    (state: RootStateOrAny) => state.repos.isFetchingRepos
  );
  const isFetchingUser = useSelector(
    (state: RootStateOrAny) => state.user.isFetchingUser
  );
  const isFetchError = useSelector(
    (state: RootStateOrAny) => state.repos.isFetchError
  );

  const [userInput, setUserInput] = useState("");

  const pagesCount = getLastPage(totalCount, perPage);
  const pages: number[] = [];
  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    if (!initialState) {
      dispatch(getRepos(userInput, currentPage, perPage));
    }
  }, [currentPage]);

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setUserInput(target.value);
    if (!userInput) {
      dispatch(setInitialState(true))
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(setCurrentPage(1));
    dispatch(getRepos(userInput, currentPage, perPage));
    dispatch(getUser(userInput));
  };

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  // Change page
  const handlePaginate = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleArrow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as any;
    const field = target.closest("button").dataset.direction;
    const newPage = getNewPage(field, currentPage, pagesCount);
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div className="App">
      <Header
        logo={logo}
        img={search}
        userInput={userInput}
        onSearch={handleSearch}
        onSubmit={handleSubmit}
      />
      {!initialState ? (!isFetchError ? (!isFetchingUser ? (<main>
        <UserCard
          userInfo={user}
          repositories={repos}
          isFetchingRepos={isFetchingRepos}
        />
        {repos.length ? (
          <Pagination
            currentPage={currentPage}
            pages={pages}
            handlePaginate={handlePaginate}
            totalCount={totalCount}
            indexOfLastItem={indexOfLastItem}
            indexOfFirstItem={indexOfFirstItem}
            onClickArrow={handleArrow}
          />) : ("")}
      </main>) : (<Loading />)) : (<StatePage img={notfound} title="找不到用戶" />)
      ) : (
        <StatePage
          img={initialStateImage}
          title="搜尋 GitHub 上的用戶"
        />
      )}
    </div>
  );
}

export default App;