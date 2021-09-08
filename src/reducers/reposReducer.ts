import { IRepository } from "../components/Repository/Repository";

const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING_REPOS = "SET_IS_FETCHING_REPOS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";
const SET_INITIAL_STATE = "SET_INITIAL_STATE";

export interface IDefaultState {
    initialState: boolean,
    items: IRepository[],
    isFetchingRepos: boolean,
    currentPage: number,
    perPage: number,
    totalCount: number,
    isFetchError: boolean,
}
export type ActionRepos = {
    type: string;
    payload: boolean | IRepository;
}

export type DispatchType = (args: ActionRepos) => ActionRepos

const defaultState: IDefaultState = {
    initialState: true,
    items: [],
    isFetchingRepos: true,
    currentPage: 1,
    perPage: 4,
    totalCount: 0,
    isFetchError: false,
};



export default function reposReducer(state: IDefaultState = defaultState, action: ActionRepos) {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload,
                isFetchingRepos: false,
            };
        case SET_IS_FETCHING_REPOS:
            return {
                ...state,
                isFetchingRepos: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload,
            };
        case SET_INITIAL_STATE:
            return {
                ...state,
                initialState: action.payload,
            };
        default:
            return state;
    }
}

export const setRepos = (repos: IRepository) => ({
    type: SET_REPOS,
    payload: repos,
});

export const setIsFetchingRepos = (bool: boolean) => ({
    type: SET_IS_FETCHING_REPOS,
    payload: bool,
});

export const setCurrentPage = (page: (number | undefined)) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
});

export const setFetchError = (bool: boolean) => ({
    type: SET_FETCH_ERROR,
    payload: bool,
});
export const setInitialState = (bool: boolean) => ({
    type: SET_INITIAL_STATE,
    payload: bool,
});