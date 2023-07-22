import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Modal } from 'components/Modal';
import { Div, H1 } from './Contacts.styled';

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <Div>
        <H1>Phone book</H1>
        <Button
          colorScheme="blackAlpha"
          onClick={toggle}
          leftIcon={<AddIcon h={3} w={3} />}
        >
          New contact
        </Button>
      </Div>
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
