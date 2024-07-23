import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider>
      <GlobalStyles />
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
