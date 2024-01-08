import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App';
import { GlobalStyle } from './styles/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyle />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
