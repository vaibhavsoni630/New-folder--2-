import React from 'react';
import ReactModal from 'react-modal';
import SignUp from '../components/forms/SignUp'


const customStyles = {
  overlay: {
    background: 'linear-gradient(to right, #8a2387, #e94057)',
    zIndex: 1000 // Ensure modal is above other content
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%', // Cover the entire width
    maxHeight: '100%', // Cover the entire height
    border: 'none', // Remove border
    borderRadius: 0 // Remove border radius
  }
};

const Modal = ({ isOpen, onClose }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();}
  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onClose}
      style={customStyles} // Apply custom styles
    >
      
      <div onClick={stopPropagation}>
        <SignUp />
      </div>
      
      
    </ReactModal>
  );
};

export default Modal;
