'use client'
import React, { useState } from 'react';

const CookieConsent = () => {
    const [visible, setVisible] = useState(true);

    const handleAccept = () => {
        // Handle cookie acceptance logic here
        setVisible(false);
    };

    const handleDecline = () => {
        // Handle cookie decline logic here
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 bg-neutral-900 text-white p-4 rounded-md shadow-lg flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="flex-grow text-white">We use cookies to ensure you get the best experience on our website. <a href="/privacy-policy" className="underline">Learn more</a></p>
            <div className="flex space-x-2">
                <button
                    onClick={handleAccept}
                    className="bg-white text-neutral-900 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
                >
                    Accept
                </button>
                <button
                    onClick={handleDecline}
                    className="bg-yellow-400 text-neutral-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
                    style={{ backgroundColor: '#FFD217' }}
                >
                    Decline
                </button>
            </div>
        </div>
    );
};

// const CookieConsent = () => {
//     const [visible, setVisible] = useState(true);

//     const handleAccept = () => {
//         // Handle cookie acceptance logic here
//         setVisible(false);
//     };

//     const handleDecline = () => {
//         // Handle cookie decline logic here
//         setVisible(false);
//     };

//     if (!visible) return null;

//     return (
//         <div className="fixed bottom-4 left-4 bg-neutral-900 text-white p-6 w-64 rounded-md shadow-lg flex flex-col space-y-4">
//             <p className="flex-grow text-sm text-white">We use cookies to ensure you get the best experience on our website. <a href="/privacy-policy" className="underline">Learn more</a></p>
//             <div className="flex justify-between">
//                 <button
//                     onClick={handleAccept}
//                     className="bg-white text-neutral-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 text-sm"
//                 >
//                     Accept
//                 </button>
//                 <button
//                     onClick={handleDecline}
//                     className="bg-yellow-400 text-neutral-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300 text-sm"
//                     style={{ backgroundColor: '#FFD217' }}
//                 >
//                     Decline
//                 </button>
//             </div>
//         </div>
//     );
// };
export default CookieConsent;
