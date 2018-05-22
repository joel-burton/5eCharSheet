import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/Store';
import LoadingView from './src/Components/LoadingView';
import Sheet from './src';

console.log("||||| purged stored state |||||");
persistor.purge();

export default class App extends React.Component {


  render() {
    return <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <Sheet />
        </PersistGate>
      </Provider>;
  }
}

