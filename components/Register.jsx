'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Eye, EyeOff, Lock, X } from 'lucide-react';

const Register = ({ setShowRegister }) => {
    const styles = {
        eyeIcon: 'absolute right-2 top-2 hover:cursor-pointer',
        para: 'text-sm font-medium text-neutral-500 text-center min-w-80',
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

    return (
        <div className='flex bg-white rounded-xl p-8 flex-col gap-4 items-center justify-center w-full max-w-md'>
            <button onClick={() => setShowRegister(false)} className="absolute top-5 left-5">
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
                    <h1 className='text-4xl font-semibold'>Create Account</h1>
                    <p className={styles.para}>We are excited to get you onboard!</p>
                </div>
                <form className='space-y-4 mb-4'>
                    <div className='rounded-md flex items-center gap-2 border px-4 py-2'>
                        <Mail color='gray' />
                        <input type="text" placeholder='Email address' className='outline-none w-full' />
                    </div>

                    <div className='rounded-md flex items-center gap-2 border px-4 py-2 relative'>
                        <Lock color='gray' />
                        <input type={isPasswordVisible ? "text" : "password"} placeholder='Password' className='outline-none w-full' />
                        {!isPasswordVisible && <Eye onClick={() => setIsPasswordVisible(!isPasswordVisible)} color='gray' className={styles.eyeIcon} />}
                        {isPasswordVisible && <EyeOff onClick={() => setIsPasswordVisible(!isPasswordVisible)} color='gray' className={styles.eyeIcon} />}
                    </div>

                    <div className='rounded-md flex items-center gap-2 border px-4 py-2 relative'>
                        <Lock color='gray' />
                        <input type={isConfirmPasswordVisible ? "text" : "password"} placeholder='Confirm password' className='outline-none w-full' />
                        {!isConfirmPasswordVisible && <Eye onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} color='gray' className={styles.eyeIcon} />}
                        {isConfirmPasswordVisible && <EyeOff onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} color='gray' className={styles.eyeIcon} />}
                    </div>
                    <button className='secondary-btn w-full'>Create account</button>
                </form>
                <p className={styles.para}>Already have an account? <Link href={"/"} className='hover:underline'>Login here</Link></p>
            </div>
        </div>
    )
}

export default Register
