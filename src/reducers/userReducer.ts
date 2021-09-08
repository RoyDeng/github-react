import { IUserInfo } from "../components/UserCard/UserCard";

const SET_USER = "SET_USER";
const SET_IS_FETCHING_USER = "SET_IS_FETCHING_USER";
interface IDefaultStateUser {
    user: any;
    totalCount: number;
    isFetchingUser: boolean;
}

export type ActionUser = {
    type: string;
    payload: boolean | IUserInfo;
};

const defaultState: IDefaultStateUser = {
    user: {},
    totalCount: 0,
    isFetchingUser: true,
};

export function userReducer(
    state: IDefaultStateUser = defaultState,
    action: any
) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                totalCount: action.payload.public_repos,
                isFetchingUser: false,
            };
        case SET_IS_FETCHING_USER:
            return {
                ...state,
                isFetchingUser: action.payload,
            };
        default:
            return state;
    }
}

export const setUser = (user: any) => ({
    type: SET_USER,
    payload: user,
});
export const setIsFetchingUser = (bool: boolean) => ({
    type: SET_IS_FETCHING_USER,
    payload: bool,
});