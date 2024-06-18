'use client'
import React, { useState } from 'react';
import Modal from './Modal';
import { offer } from '@/app/data'
import { X } from 'lucide-react';
import Link from 'next/link';

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  const { description, offerExpiry, price, title, imageUrl } = offer;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isVisible && (
        <div className="bg-neutral-900 text-center text-white p-1 top-0 w-full rounded-b-3xl">
          <span role="img" aria-label="party">🎉</span>
          Check out our ongoing offers!
          <span href="#" onClick={() => setIsModalOpen(true)} className="underline text-white font-medium hover:cursor-pointer ml-2">Click here</span>
          <button
            onClick={handleClose}
            className=" right-4 top-4 transform -translate-y-1/2 bg-transparent border-none text-gray-500 text-lg cursor-pointer">
            &times;
          </button>
        </div>
      )}

      {
        isModalOpen && (
          <Modal>
            <div className="relative bg-white rounded-md w-96 h-auto p-6 shadow-lg">
              <X className='hover:cursor-pointer' onClick={() => setIsModalOpen(false)} />
              <img className="w-full h-48 object-contain rounded-md" src={offer.imageUrl} alt="Offer Image" />
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-neutral-700">{offer.title}</h2>
                <p className="text-gray-700 mt-2 font-normal">{offer.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Price: ${offer.price}
                  </span>
                  <span className="inline-block bg-red-200 rounded-md px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">
                    Expires on: {offer.offerExpiry}
                  </span>
                </div>
                <Link href={'/purchase'}>
                 <button className="primary-btn w-full">Grab this offer 🎉</button>
                </Link>
              </div>
            </div>
          </Modal>
        )
      }

    </>
  );
};

export default OfferBanner;
