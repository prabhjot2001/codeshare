'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import Client from './Client';

const SideBar = () => {
    const [clients, setClients] = useState([
        { socketId: 1, username: 'Prabhjot' },
        { socketId: 1, username: 'Emma' },
        { socketId: 2, username: 'Julie' },
        { socketId: 3, username: 'Ava' },
        { socketId: 3, username: 'Olivia' },
        { socketId: 3, username: 'Eliana' },
        
    ]);

    const [startIndex, setStartIndex] = useState(0);

    const showNext = () => {
        if (startIndex + 8 < clients.length) {
            setStartIndex(startIndex + 8);
        }
    };

    const showPrevious = () => {
        if (startIndex - 8 >= 0) {
            setStartIndex(startIndex - 8);
        }
    };

    return (
        <div>
            <div className='flex flex-col justify-between min-h-screen bg-gray-50 px-2 py-4'>
                <div className='flex flex-col gap-6'>
                    <div className='border-b pb-2'>
                        {/* Logo */}
                        <span className='flex items-center gap-4 justify-center'>
                            <img src="/logo (2).svg" alt="Code share logo" className='h-6 w-6' />
                            <Link href='/'>
                                <h1 className='text-normal font-medium'>Code share</h1>
                            </Link>
                        </span>
                    </div>

                    <div>
                        {/* Joined members */}
                        <h3 className='font-semibold text-center mb-2'>Joined members</h3>
                        <div>
                            {clients.slice(startIndex, startIndex + 8).map((client, idx) => (
                                <Client key={idx} username={client.username} />
                            ))}
                        </div>
                        <div className='flex items-center justify-between py-1'>
                            {/* Navigation buttons */}
                            <button className='flex items-center text-sm' onClick={showPrevious}>
                                <ChevronLeft size={15} /> prev
                            </button>
                            <button className='flex items-center text-sm' onClick={showNext}>
                                next <ChevronRight size={15} />
                            </button>
                        </div>
                        <div className='text-sm text-center py-1 bg-neutral-800 text-white rounded-md'>
                            Total {clients.length} members are joined the room
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    {/* Buttons */}
                    <button className='secondary-btn text-sm flex items-center justify-evenly'>
                        Copy Room-Id <Copy size={20} color='black' />
                    </button>
                    <button className='primary-btn text-sm flex items-center justify-evenly'>
                        Leave room <LogOut color='white' size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
