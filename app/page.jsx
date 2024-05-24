import Cookieconsent from '@/components/CookieConsent'
import Nav from '@/components/Nav'
import React from 'react'
import Link from 'next/link'
import OfferBanner from '@/components/OfferBanner'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <OfferBanner />

            <section className='px-10 mb-20'>

                <Nav />
                <section className='flex justify-between items-center'>
                    <div className='w-[50%] flex flex-col gap-10'>
                        <span className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-5xl'>Share Code in Real-time with Developers</h1>
                            <h2 className='font-medium text-lg'>An online code editor for interviews, troubleshooting, teaching & more…</h2>
                        </span>
                        <span className='flex gap-4 items-center'>
                            <Link href={'/Room/join'}>
                                <button className='primary-btn'>Start sharing code</button>
                            </Link>
                            <Link href={'/Auth/create-account'}>
                                <button className='secondary-btn'>Try premium</button>
                            </Link>
                        </span>
                    </div>
                    <div className='w-[50%]'>
                        <img src="/img1.jpeg" alt="" className='object-cover w-full h-full rounded-md' />
                    </div>
                    <Cookieconsent />
                </section>

                <section className=''>

                </section>

            </section>
            <Footer />
        </>
    )
}

export default page