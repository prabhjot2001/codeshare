import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 mx-10 sm:mx-0">
        {children}
      </div>
    </div>
  );
};

export default Modal;
