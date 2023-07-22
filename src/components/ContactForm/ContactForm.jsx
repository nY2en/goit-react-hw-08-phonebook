import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { warning } from 'components/notify';
import { FormGenerator } from 'components/FormGenerator';

export const ContactForm = ({ toggle }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value.trim();
    const number = form.number.value;
    const isInContacts = contacts.some(el => el.name === name);

    if (isInContacts) {
      warning(name);

      return;
    }
    dispatch(addContact({ name, number }));

    toggle();

    form.reset();
  };

  return <FormGenerator type={'contacts'} onSubmit={handleFormSubmit} />;
};
