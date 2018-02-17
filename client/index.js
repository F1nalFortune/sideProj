// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './containers/App';
// import { Router, browserHistory } from 'react-router-dom';
// import routes from './routes';

// ReactDOM.render(
//   <Router history={browserHistory} routes={routes} />,
//    document.getElementById('content')

// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-css/semantic.min.css';
import './stylesheets/style.css';
import './stylesheets/font-awesome-4.6.3/css/font-awesome.css';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('content')
);
registerServiceWorker();