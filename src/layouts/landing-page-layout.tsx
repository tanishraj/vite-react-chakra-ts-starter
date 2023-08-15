import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const LandingPageLayout = () => (
  <Box width='full'>
    <Box as='header'>Landing Page Header</Box>
    <Box as='main'>
      <Outlet />
    </Box>
    <Box as='footer'>Landing Page Footer</Box>
  </Box>
);
