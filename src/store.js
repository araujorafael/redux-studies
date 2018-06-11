import {createStore, applyMiddleware, compose} from 'redux';
import todoAppReducer from './reducers/reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function createAppStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(todoAppReducer, initialState, composeEnhancers(
    applyMiddleware(reduxImmutableStateInvariant())
  ));

  return store;
}
