import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@styles/theme';
import "@styles/fonts/fonts.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
