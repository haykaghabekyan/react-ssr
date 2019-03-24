import { homePageDefaultState } from './home.state';
import {
    HOME_PAGE_LOAD_ACTION_TYPE,
    HOME_PAGE_LOAD_FAILED_ACTION_TYPE,
    HOME_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
    HOME_PAGE_RESET_ACTION_TYPE,
} from './home.actions';

export const homePageReducer = (state = homePageDefaultState, action) => {
    switch (action.type) {
        case HOME_PAGE_LOAD_ACTION_TYPE:
            return {
                ...state,
                isLoading: true,
            };
        case HOME_PAGE_LOAD_FAILED_ACTION_TYPE:
            return {
                ...state,
                opened: true,
                isLoading: false,
                error: action.payload,
            };
        case HOME_PAGE_LOAD_SUCCEEDED_ACTION_TYPE:
            return {
                ...state,
                opened: true,
                isLoading: false,
                ...action.payload
            };
        case HOME_PAGE_RESET_ACTION_TYPE:
            return homePageDefaultState;
        default:
            return state;
    }
};
