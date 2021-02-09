import React from 'react';
import './styles/tailwind.css';
import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Appbar from './components/Appbar';



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Appbar />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
