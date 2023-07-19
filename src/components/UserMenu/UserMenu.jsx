import { Button } from '@chakra-ui/react';
import { Div } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <Div>
      <p>mango@mail.com</p>
      <Button type="button" colorScheme="blackAlpha">
        Logout
      </Button>
    </Div>
  );
};
