import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundation/colors';
import { typography } from './foundation/typography';

export const theme = extendTheme({
  colors,
  ...typography,
});
