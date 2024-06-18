import React, { useState, useEffect } from 'react';
import { CircleX, CircleCheckBig } from 'lucide-react';

const Toast = ({ text, type }) => {
    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const icon = type === 'success' ? <CircleCheckBig className="text-green-500 mr-2" /> : <CircleX className="text-red-500 mr-2" />;

    const toastClass = `px-4 py-2 rounded-md absolute top-4 right-4 border shadow-sm 
                        ${type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'}`;

    const handleToastClose = () => {
        setShowToast(false);
    };

    return (
        <>
            {showToast && (
                <div className={toastClass}>
                    <div className="flex items-center">
                        {icon}
                        <p className="font-medium">{text}</p>
                        <button className="ml-2 text-gray-500 hover:text-gray-700" onClick={handleToastClose}>
                            <CircleX size={16} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Toast;
