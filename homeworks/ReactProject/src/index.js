import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoggedIn} from './actions/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import { App } from './App';
import { rootReducer } from './reducers/rootReducer'


const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.coursesJWT) {
  const user = { token: localStorage.coursesJWT}
  store.dispatch(userLoggedIn(user))
}

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>,
                document.getElementById('root'));