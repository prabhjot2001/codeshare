'use client'
import React from 'react'
import Link from 'next/link'
import { Mail, Eye, EyeOff, KeyRound, X } from 'lucide-react';
import { useState } from 'react';

const Login = ({ setShowLogin }) => {
    const styles = {
        eyeIcon: 'absolute right-2 top-2 hover:cursor-pointer',
        para: 'text-sm font-medium text-neutral-500 text-center min-w-80',
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <div className='flex bg-white rounded-xl p-8 flex-col gap-4 items-center justify-center'>
            <button onClick={() => setShowLogin(false)} className="absolute top-5 left-5">
                <X />
            </button>

            {/* --------form----------- */}
            <div className=''>
                <span className='flex justify-center items-center gap-4 mb-8'>
                    <img src="/logo (2).svg" alt="" className='h-10 w-10' />
                    <Link href={'/'}>
                        <h1 className='text-xl font-semibold'>Code Share</h1>
                    </Link>
                </span>
                <div className='mb-8 text-center space-y-2'>
                    <h1 className='text-4xl font-semibold'>Login</h1>
                    <p className={styles.para}>Welcome back! Please login to your account.</p>
                </div>
                <form className='space-y-4 mb-4'>
                    <div className='rounded-md flex items-center gap-2 border px-4 py-2'>
                        <Mail color='gray' />
                        <input type="text" placeholder='Email address' className='outline-none w-full' />
                    </div>

                    <div className='rounded-md flex items-center gap-2 border px-4 py-2 relative'>
                        <KeyRound color='gray' />
                        <input type={isPasswordVisible ? "text" : "password"} placeholder='Password' className='outline-none w-full' />
                        {!isPasswordVisible && <Eye onClick={() => setIsPasswordVisible(!isPasswordVisible)} color='gray' className={styles.eyeIcon} />}
                        {isPasswordVisible && <EyeOff onClick={() => setIsPasswordVisible(!isPasswordVisible)} color='gray' className={styles.eyeIcon} />}
                    </div>

                    <button className='secondary-btn w-full'>Login</button>
                </form>
                <p className={styles.para}>Don't have an account? <Link
                    className='hover:underline' href={"/"}>Create account here</Link></p>
            </div>
        </div>
    )
}

export default Login
