import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const AuthPageLayout = () => (
  <Box width='full'>
    <Box as='header'>Auth Layout Header</Box>
    <Box as='main'>
      <Outlet />
    </Box>
    <Box as='footer'>Auth layout Footer</Box>
  </Box>
);
