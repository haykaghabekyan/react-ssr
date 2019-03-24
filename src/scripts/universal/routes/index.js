import React from 'react';
import { filter, map, take } from 'rxjs/operators';
import { HomePage } from '../pages/home';
import { observableFromStore } from '../utils/observable-from-store';
import { homePageLoadAction } from '../pages/home';

export const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        loadPage: (store, params) => {
            store.dispatch(homePageLoadAction(params));

            return {
                ready: observableFromStore(store).pipe(
                    map(state => !state.homePage.isLoading),
                    filter(x => x === true),
                    take(1)
                ),
            };
        }
    }
];
