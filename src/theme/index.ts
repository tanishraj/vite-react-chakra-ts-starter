import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundation/colors';
import { typography } from './foundation/typography';
import { breakpoints } from './foundation/breakpoints';

export const theme = extendTheme({
  colors,
  breakpoints,
  ...typography,
});
