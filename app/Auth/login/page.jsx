'use client'
import React from 'react'
import Link from 'next/link'
import { Mail, Eye, EyeOff, KeyRound } from 'lucide-react';
import { useState } from 'react';

const page = () => {
    const styles = {
        eyeIcon: 'absolute right-2 top-2 hover:cursor-pointer',
        para: 'text-sm font-medium text-neutral-500 text-center',
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <div className='flex items-center justify-center w-full min-h-screen'>

            <div className='flex border-4 border-neutral-100 gap-6 items-center justify-center p-6 rounded-md'>
                {/* --------image---------- */}
                <div className='w-1/2'>
                    <img src="/doodle/FloatDoodle.png" alt="" className='h-96 w-full' />
                </div>

                {/* --------form----------- */}
                <div className='w-1/2'>
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
                        className='hover:underline' href={"/Auth/create-account"}>Create account here</Link></p>
                </div>
            </div>
        </div>

    )
}

export default page
