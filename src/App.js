import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';

import Home from './screens/Home';

const App = () => {
  const store = createStore(Reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
