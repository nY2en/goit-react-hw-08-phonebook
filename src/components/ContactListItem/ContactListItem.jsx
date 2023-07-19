import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Li } from './ContactListItem.styled';
import { Button } from '@chakra-ui/react';

const ContactListItem = ({ data }) => {
  const { name, phone, id } = data;

  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Li>
      <p>
        {name}: {phone}
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
