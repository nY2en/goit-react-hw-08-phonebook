import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Li, Span, Button } from './ContactListItem.styled';

const ContactListItem = ({ data }) => {
  const { name, number, id } = data;

  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Li>
      <Span></Span>
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
      >
        {isDeleting ? (
          <ThreeDots
            height="10"
            width="35"
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
