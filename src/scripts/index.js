import React from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Main from './Main';
import * as reducers from './Reducers/Reducers';
import { createStore, renderDevTools } from './store_enhancers/devTools';

let reducersApp = combineReducers(reducers);
let store = createStore(reducersApp);

React.render(
  <div>
    <Provider store={ store }>
      {() => <Main />}
    </Provider>
    {renderDevTools(store)}
  </div>,
  document.getElementById('App')
);