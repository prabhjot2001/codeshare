'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Modal from './Modal'
import Register from './Register'

const Hero = () => {
    const [showRegister, setShowRegister] = useState(false)
    return (
        <div className='flex flex-col md:flex-row items-center gap-10 p-4 md:p-10'>
            <div className='md:w-1/2 flex flex-col gap-10'>
                <span className='flex flex-col gap-4'>
                    <h1 className='font-semibold text-3xl md:text-5xl text-center md:text-left'>Share Code in Real-time with Developers</h1>
                    <h2 className='font-normal text-lg text-center md:text-left'>An online code editor for interviews, pair programming, teaching, trouble-shooting & more…</h2>
                </span>
                <span className='flex flex-col md:flex-row gap-4 items-center z-0'>
                    <Link href={'/Room/join'}>
                        <button className='primary-btn w-full md:w-auto'>Start sharing code</button>
                    </Link>
                    <button onClick={() => setShowRegister(true)} className='secondary-btn  md:w-auto'>Try premium</button>
                </span>
            </div>
            <div className='md:w-1/2 w-full'>
                <img src="/img1.jpeg" alt="Code sharing illustration" className='shadow-lg object-cover w-full h-full rounded-md' />
            </div>
            {showRegister && (
                <Modal>
                    <Register setShowRegister={setShowRegister} />
                </Modal>
            )}
        </div>
    )
}

export default Hero
