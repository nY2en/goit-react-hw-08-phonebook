import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice/operations';
import { Button } from '@chakra-ui/react';
import { ThreeDots } from 'react-loader-spinner';
import { Li } from './ContactListItem.styled';

const ContactListItem = ({ data }) => {
  const { name, number, id } = data;

  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Li>
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={e => {
          dispatch(deleteContact(id));
          setIsDeleting(true);
        }}
        disabled={isDeleting}
        colorScheme="blackAlpha"
      >
        {isDeleting ? (
          <ThreeDots
            height="10"
            width="42"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <p>Delete</p>
        )}
      </Button>
    </Li>
  );
};

export default ContactListItem;
