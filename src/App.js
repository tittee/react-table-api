import React from 'react';
import './styles/tailwind.css';
import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import TableShow from './components/TableShow';



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <TableShow />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
