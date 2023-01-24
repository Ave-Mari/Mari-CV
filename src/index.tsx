import * as React from 'react';
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import Favicon from 'react-favicon'
import App from './App';

const client = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={client}>
      <Favicon url="https://raw.githubusercontent.com/Ave-Mari/Mari-CV/main/dist/favicon.ico" />
      <App />
    </QueryClientProvider>,
    document.getElementById('app')
  );