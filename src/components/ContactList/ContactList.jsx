import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import ContactListItem from 'components/ContactListItem';
import { Ul } from './Contact.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Ul>
      {visibleContacts.map(data => (
        <ContactListItem key={data.id} data={data} />
      ))}
    </Ul>
  );
};
