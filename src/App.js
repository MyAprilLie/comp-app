import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Competitions from './components/Competitions';

const App = () => {
  return (
    <Provider store={store}>
       <h1>Competitions</h1>
      <Competitions />
    </Provider>
  );
};

export default App;
