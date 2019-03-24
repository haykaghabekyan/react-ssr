import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { HOME_PAGE_LOAD_ACTION_TYPE, homePageLoadSucceededAction, homePageLoadFailedAction } from './home.actions';
import { HomeService } from '../services/home.service';

export const homePageLoadEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === HOME_PAGE_LOAD_ACTION_TYPE),
        mergeMap(() => {
            const promise = HomeService.get();

            return from(promise)
                .pipe(
                    map(result => {
                        return homePageLoadSucceededAction(result);
                    }),
                    catchError(error => of(homePageLoadFailedAction(error.message)))
                );
        })
    );
};
