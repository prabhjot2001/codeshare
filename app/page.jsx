import Cookieconsent from '@/components/CookieConsent'
import Nav from '@/components/Nav'
import React from 'react'

const page = () => {
    return (
        <>
            <Nav />
            <section className='flex justify-between items-center'>
                <div className='w-[50%] flex flex-col gap-10'>
                    <spanc className='flex flex-col gap-4'>
                        <h1 className='font-semibold text-5xl'>Share Code in Real-time with Developers</h1>
                        <h2 className='font-medium text-lg'>An online code editor for interviews, troubleshooting, teaching & more…</h2>
                    </spanc>
                    <span className='flex gap-4 items-center'>
                        <button className='primary-btn'>Start sharing code</button>
                        <button className='secondary-btn'>Try premium</button>
                    </span>
                </div>
                <div className='w-[50%]'>
                    <img src="/img1.jpeg" alt="" className='object-cover w-full h-full rounded-md' />
                </div>
                <Cookieconsent />
            </section>
        </>
    )
}

export default page