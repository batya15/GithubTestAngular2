import { EModelState } from './model-state.enum';

/**
 * Общий класс для отображения состояний модели
 * @example
 * ```
 * class MyComponentModel extends WithStateModel {
 *     constructor(state: EModelState, opaque: MyData) {
 *         super(state);
 *         if(opaque) {
 *             // do stuff
 *         }
 *     }
 * }
 * ```
 */
export class WithStateModel {
  private readonly _state: EModelState;

  constructor(state: EModelState) {
    this._state = state;
  }

  public isStatePending(): boolean {
    return this._state === EModelState.PENDING;
  }

  public isStateLoaded(): boolean {
    return this._state === EModelState.LOADED;
  }

  public isStateError(): boolean {
    return this._state === EModelState.ERROR;
  }

  public isStateNone(): boolean {
    return this._state === EModelState.NONE;
  }
}
