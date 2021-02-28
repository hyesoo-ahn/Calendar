import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const Modal = ({ children, onClose }) => {
  return createPortal(
      <Container onClick={onClose}>
        {children}
      </Container>,
      document.getElementById('modal'));
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`