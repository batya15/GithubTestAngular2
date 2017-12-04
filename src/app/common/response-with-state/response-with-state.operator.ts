import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { EModelState } from '../with-state/model-state.enum';
import { IResponseWithState } from './response-with-state.interface';

export function responseWithState<T>(obs: Observable<T>): Observable<IResponseWithState<T>> {
  return obs
    .map(data => ({state: EModelState.LOADED, data}))
    .catch(err => Observable.of({state: EModelState.ERROR, data: null, error: err.message}))
    .startWith({state: EModelState.PENDING, data: null});
}
