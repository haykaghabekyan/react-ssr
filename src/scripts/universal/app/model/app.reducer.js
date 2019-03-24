import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { homePageReducer } from '../../pages/home';

export const combinedReducers = combineReducers({
    form: formReducer,
    homePage: homePageReducer,
});
