import React from "react";
import styled from "styled-components";
import { useState } from 'react';
import { ModalLogin } from "./modalLogin";

const AccessibilityContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 2vw; /* ou outro valor que voc� achar apropriado */
  padding-right: 18px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6adf76;
  background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 17px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #00c9ff;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;


export function Accessibility(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <AccessibilityContainer>
      <RegisterButton>Cadastre-se</RegisterButton>
      <LoginButton onClick={openModal}>Login</LoginButton>

      <ModalLogin isOpen={modalIsOpen} closeModal={closeModal}/>
    </AccessibilityContainer>
  );
}
