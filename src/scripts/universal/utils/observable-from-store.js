import { Observable } from 'rxjs';

export const observableFromStore = store => {
    return Observable.create(observer => {
        const unsubscribe = store.subscribe(() => observer.next(store.getState()));
        observer.next(store.getState());
        return unsubscribe;
    })
};
