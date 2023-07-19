import { extendTheme } from '@chakra-ui/react';
import background from 'img/bgc.jpg';
import '@fontsource/kalam';

export const theme = extendTheme({
  fonts: {
    heading: `'Kalam', sans-serif`,
    body: `'Kalam', sans-serif`,
  },

  styles: {
    global: {
      'html, body': {
        color: 'gray.900',
        lineHeight: 'tall',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      },
      ul: { listStyle: 'none' },
    },
  },
});
