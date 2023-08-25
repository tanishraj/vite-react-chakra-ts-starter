import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './lib/layout';
import { Routings } from './lib/router/routings';
import { theme } from './lib/styles/theme';
import '../src/lib/styles/globals/globals.css';

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
