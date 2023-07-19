import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Modal } from 'components/Modal';
import { ContactList } from 'components/ContactList';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <Button colorScheme="blackAlpha" onClick={toggle}>
        Add new contact
      </Button>
      {isOpen && (
        <Modal toggle={toggle}>
          <ContactForm toggle={toggle} />
        </Modal>
      )}
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
