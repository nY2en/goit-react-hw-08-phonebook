import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <App />
          <ToastContainer />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
