import { combineEpics } from 'redux-observable';
import { homePageLoadEpic } from '../../pages/home';

export const combinedEpics = combineEpics(
    homePageLoadEpic,
);
