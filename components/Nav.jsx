"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { LogIn, Menu, X } from 'lucide-react'
import Modal from './Modal'
import Login from './Login'

const Nav = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='flex items-center justify-between h-20 w-full p-4 bg-white sm:px-20'>
            <span className='flex items-center gap-4'>
                <img src="/logo (2).svg" alt="Code share logo" className='h-10 w-10' />
                <Link href={'/'}>
                    <h1 className='text-xl font-medium'>Code share</h1>
                </Link>
            </span>
            <div className='flex items-center gap-4 md:hidden'>
                <button onClick={() => setMenuOpen(!menuOpen)} className='text-black'>
                    <Menu size={28} />
                </button>
            </div>
            <span className='hidden md:flex items-center gap-4 font-medium'>
                <Link className='hover:underline' href={'/'}>Features</Link>
                <Link className='hover:underline' href={'/'}>About us</Link>
                <button onClick={() => setShowLogin(true)} className='primary-btn flex gap-1'>Login <LogIn color='white' /></button>
            </span>

            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className='flex justify-between items-center p-4 border-b'>
                    <h1 className='text-xl font-medium'>Menu</h1>
                    <button onClick={() => setMenuOpen(false)} className='text-black'>
                        <X size={28} />
                    </button>
                </div>
                <div className='flex flex-col p-4'>
                    <Link className='p-4 hover:bg-gray-200' href={'/'}>Features</Link>
                    <Link className='p-4 hover:bg-gray-200' href={'/'}>About us</Link>
                    <button onClick={() => { setShowLogin(true); setMenuOpen(false); }} className='primary-btn flex gap-1 m-4'>Login <LogIn color='white' /></button>
                </div>
            </div>

            {showLogin && <Modal>
                <Login setShowLogin={setShowLogin} />
            </Modal>}
        </nav>
    )
}

export default Nav
