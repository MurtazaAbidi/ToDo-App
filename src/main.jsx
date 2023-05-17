import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './services/store/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SnackbarProvider maxSnack="3">
        <App />
      </SnackbarProvider>
    </PersistGate>
  </Provider>,
)
