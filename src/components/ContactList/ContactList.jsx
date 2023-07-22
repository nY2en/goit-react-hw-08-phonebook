import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contactSlice/selectors';
import { fetchContacts } from 'redux/contactSlice/operations';
import ContactListItem from 'components/ContactListItem';
import { Ul } from './ContactList.styled';

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
