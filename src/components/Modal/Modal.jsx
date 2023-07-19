import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, Window } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, toggle }) => {
  useEffect(() => {
    const onEscPush = e => {
      if (e.code === 'Escape') {
        toggle();
      }
    };

    window.addEventListener('keydown', onEscPush);

    return () => {
      window.removeEventListener('keydown', onEscPush);
    };
  }, [toggle]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Window>{children}</Window>
    </Backdrop>,
    modalRoot
  );
};
