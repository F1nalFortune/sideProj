import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore( rootReducer, {}, enhancers );

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;