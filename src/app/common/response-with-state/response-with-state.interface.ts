import { EModelState } from '../with-state/model-state.enum';

export interface IResponseState {
  state: EModelState;
}

export interface IResponseWithState<T> extends IResponseState {
  data: T;
  error?: string;
}
