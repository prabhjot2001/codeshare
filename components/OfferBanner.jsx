'use client'
import React, { useState } from 'react';

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="bg-neutral-900 text-center text-white p-1 top-0 w-full rounded-b-3xl">
        <span role="img" aria-label="party">🎉</span>
        Check out our ongoing offers!
        <a href="#" className="underline font-bold ml-2">Click here</a>
        <button
          onClick={handleClose}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none text-white text-lg cursor-pointer">
          &times;
        </button>
      </div>
    )
  );
};

export default OfferBanner;
