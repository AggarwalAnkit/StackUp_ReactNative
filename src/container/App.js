import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/ConfigureStore';
import RootContainer from './RootContainer';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <RootContainer />
  </Provider>
);

export default App;
