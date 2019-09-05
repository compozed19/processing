import rootReducer from '../reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger();

export default function configureStore (initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise,thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextReducer = require('../reducers/index');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}