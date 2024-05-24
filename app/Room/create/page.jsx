'use client'
import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { Link2, User } from 'lucide-react'
import { v4 as uuid } from 'uuid'

const Page = () => {

    const [uid, setUid] = useState('')
    const [userName, setUserName] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('handle submit called')
        console.log(userName, uid)
    }

    const createLink = () => {
        const link = uuid();
        setUid(link)
    }

    const styles = {
        para: 'text-sm font-medium text-neutral-500 text-center',
    }

    return (
        <div className='flex items-center justify-center min-h-screen w-full'>
            {/* ---------header--------- */}
            <div className='flex border-4 w-1/3 border-neutral-100 items-center justify-center p-6 rounded-md'>
                <div className='space-y-8 w-full'>
                    <div className=''>
                        <span className='flex justify-center items-center gap-4 mb-8'>
                            <img src="/logo (2).svg" alt="" className='h-10 w-10' />
                            <NextLink href={'/'}>
                                <h1 className='text-xl font-semibold'>Code Share</h1>
                            </NextLink>
                        </span>
                        <div className='flex flex-col items-center justify-center space-y-2'>
                            <h1 className='text-4xl font-semibold'>Create room</h1>
                            <p className={styles.para}>Generate and click create button to make new room</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='space-y-4 mb-4'>
                        <div className='rounded-md flex items-center gap-2 border px-4 py-2'>
                            <Link2 color='gray' />
                            <input
                                type="text"
                                placeholder='link'
                                className='outline-none w-full hover:cursor-not-allowed'
                                value={uid}
                                disabled={true}
                                onChange={(e) => setUid(e.target.value)}
                            />
                        </div>
                        <div className='rounded-md flex items-center gap-2 border px-4 py-2 '>
                            <User color='gray' />
                            <input
                                type="text"
                                placeholder='Username'
                                className='outline-none w-full'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <button type='button' onClick={createLink} className='primary-btn w-full'>✨ Generate another link</button>
                        <button type='submit' className='secondary-btn w-full'>Create room</button>
                    </form>
                    <p className={styles.para}>Already have an invitation link?
                        <NextLink className='hover:underline' href={"/Room/join"}>
                            Join room
                        </NextLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page
