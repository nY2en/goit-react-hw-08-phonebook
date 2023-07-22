import { Button } from '@chakra-ui/react';
import { Div, P } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';

import { logOutUser } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { email } = useSelector(selectUser);

  const handelBtnClick = () => {
    dispatch(logOutUser());
  };

  return (
    isLoggedIn && (
      <Div>
        <P>{email}</P>
        <Button type="button" onClick={handelBtnClick} colorScheme="blackAlpha">
          Logout
        </Button>
      </Div>
    )
  );
};
