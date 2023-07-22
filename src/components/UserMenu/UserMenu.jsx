import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/authSlice/operations';
import { selectIsLoggedIn, selectUser } from 'redux/authSlice/selectors';
import { Div, P } from './UserMenu.styled';

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
