export const HOME_PAGE_LOAD_ACTION_TYPE = 'HOME_PAGE_LOAD_ACTION_TYPE';
export const homePageLoadAction = () => {
    return {
        type: HOME_PAGE_LOAD_ACTION_TYPE,
    };
};

export const HOME_PAGE_LOAD_SUCCEEDED_ACTION_TYPE = 'HOME_PAGE_LOAD_SUCCEEDED_ACTION_TYPE';
export const homePageLoadSucceededAction = data => {
    return {
        type: HOME_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
        payload: data,
    };
};

export const HOME_PAGE_LOAD_FAILED_ACTION_TYPE = 'HOME_PAGE_LOAD_FAILED_ACTION_TYPE';
export const homePageLoadFailedAction = data => {
    return {
        type: HOME_PAGE_LOAD_FAILED_ACTION_TYPE,
        payload: data,
    };
};

export const HOME_PAGE_RESET_ACTION_TYPE = 'HOME_PAGE_RESET_ACTION_TYPE';
export const homePageResetAction = () => {
    return {
        type: HOME_PAGE_RESET_ACTION_TYPE,
    };
};
