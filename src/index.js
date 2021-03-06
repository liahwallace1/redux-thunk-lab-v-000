import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import {WrapperApp} from './App';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

// const store = createStore(rootReducer, compose(applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f )
//   );
const store = createStore(rootReducer, applyMiddleware(thunk))
  ;

ReactDOM.render(
    <Provider store={store}>
      <WrapperApp />
    </Provider>,
    document.getElementById('root')
);
