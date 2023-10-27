import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './layout';
import { Routings } from './router/routings';
import { theme } from './theme';
import '../src/styles/globals/globals.css';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </ChakraProvider>
  );
}
