import Modal from 'react-modal';
import React from 'react';
import './modalLogin.css'

export function ModalLogin({ isOpen, closeModal }) {


    const modalStyle = {
        content: {
          width: '60%', /* Ajuste o valor conforme necess�rio */
          maxWidth: '500px', /* Ajuste o valor conforme necess�rio */
          borderRadius: '10px',
          boxShadow: '0px 1px 8px 2px rgba(0, 0, 0, 0.5)',
          
          border: 'none',
          margin: '20vh auto',
        },

        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)', /* Cor de fundo semitransparente */
            backdropFilter: 'blur(4px)', /* Desfoque */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          },
      };

      const h1Style = {
        color: 'rgb(9, 11, 23)',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 600,
        paddingBottom: '25px',
        margin: '24px 0px 12px',
      };


  return (
    <Modal style={modalStyle}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Login Modal"
    >
      <div style={{ background: 'white' }}>
      <h1 style={h1Style}>Login</h1>
      </div>
    </Modal>
  );
}