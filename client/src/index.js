import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
const colors = {
  lightGreen: '#90ee90',
  sandYellow: '#f4a460',
};

const theme = extendTheme({ colors });
ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider them={theme}>
      <GlobalStyles />
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
