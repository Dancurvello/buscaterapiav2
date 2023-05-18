import Modal from 'react-modal';
import React from 'react';

import { MdClose } from 'react-icons/md';


export function ModalLogin({ isOpen, closeModal }) {


    const modalStyle = {
        content: {
          width: '80%', /* Ajuste o valor conforme necessário */
          maxWidth: '500px', /* Ajuste o valor conforme necessário */
          borderRadius: '10px',
          boxShadow: '0px 1px 8px 2px rgba(0, 0, 0, 0.5)',          
          border: 'none',
          margin: '16vh auto',
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
        margin: '-14px 0px 1px',
      };

      const h2Style = {
        color: 'rgb(143 143 143)',
        textAlign: 'center',
        fontSize: '15px',
        fontWeight: 600,
        paddingBottom: '25px',
        margin: '-14px 0px 12px',
        marginTop: '37px'
      };

      const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '26px',
        color: 'rgba(0, 0, 0, 0.5)',
        padding: '0',
      };

      const googleButtonStyle = {
        background: '#4285F4',
        borderRadius: '20px',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px'
      };

      const emailInputStyle = {
        border: '2px solid #4285F4',
        borderRadius: '4px',
        padding: '10px',
        marginBottom: '10px',
        width: '60%',
      };
      
      


      return (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Login Modal"
          style={modalStyle}
        >
          <div style={{ background: 'white' }}>
            
            <button style={closeButtonStyle} onClick={closeModal}>
              <MdClose />
            </button>
            
            <h1 style={h1Style}>Login</h1>
            <div style={{ textAlign: 'center' }}>
            <button style={googleButtonStyle}>Entrar com o Google</button>
            </div>
            <div>
            <h2 style={h2Style}>OU</h2>
            </div>
            <div style={{ textAlign: 'center' }}>
              <input type="text" placeholder="Email" style={emailInputStyle}/>
              <input type="password" placeholder="Senha" style={emailInputStyle} />
            </div>
          </div>
        </Modal>
      );
    }