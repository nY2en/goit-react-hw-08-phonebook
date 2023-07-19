import { Button } from '@chakra-ui/react';
import { Div, P } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <Div>
      <P>mango@mail.com</P>
      <Button type="button" colorScheme="blackAlpha">
        Logout
      </Button>
    </Div>
  );
};
