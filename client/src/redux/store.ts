import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Photos from './photos/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { PhotoState } from './photos/types';

const reducers = combineReducers({
  Photos,
});
export interface RootState {
  readonly Photos: PhotoState;
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f
  )
);
sagaMiddleware.run(rootSaga);

export default store;
