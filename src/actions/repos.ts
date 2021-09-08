import axios from "axios";
import {
    setRepos,
    setIsFetchingRepos,
    setFetchError,
    setInitialState,
    DispatchType
} from "../reducers/reposReducer";
import {
    setIsFetchingUser,
    setUser
} from "../reducers/userReducer";

export const getRepos = (userInput: string, currentPage: number, perPage: number) => {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(setInitialState(false))
            dispatch(setIsFetchingRepos(true))
            dispatch(setFetchError(false))
            const repositories = await axios.get(`https://api.github.com/users/${userInput}/repos?per_page=${perPage}&page=${currentPage}`);
            dispatch(setRepos(repositories.data))
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetchingRepos(false))
        }
    }
}
export const getUser = (userInput: string) => {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(setInitialState(false))
            dispatch(setIsFetchingUser(true))
            dispatch(setFetchError(false))
            const userInfo = await axios.get(`https://api.github.com/users/${userInput}`);
            dispatch(setUser(userInfo.data))
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetchingUser(false))
        }
    }
}
