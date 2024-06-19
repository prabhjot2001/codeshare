'use client'
import React, { useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'
import { Link2, UserRound, ClipboardCopy } from 'lucide-react'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'


const Page = () => {
    const [uid, setUid] = useState('')
    const [userName, setUserName] = useState('')
    const router = useRouter();

    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!uid || !userName) {
            toast.error('link and username is required')
            return
        }
        router.push(`/editor/${uid}/?uid=${uid}&username=${userName}`);
        toast.success("Room created");
    }

    const createLink = () => {
        const link = uuid();
        setUid(link)
    }

    const styles = {
        para: 'text-sm font-medium text-neutral-500 text-center',
    }

    const copyToClipboard = () => {
        if (!uid) {
            toast.error('Cannot copy empty link field');
            return;
        }
        inputRef.current.disabled = false;
        inputRef.current.select();
        document.execCommand('copy');
        inputRef.current.disabled = true;
        toast.success('Link copied to clipboard');
    }

    return (
        <div className='flex items-center justify-center min-h-screen w-full'>
            <div className='flex flex-col items-center justify-center p-6 w-full md:w-1/3 space-y-4'>
                <span className='flex justify-center items-center gap-4 mb-4'>
                    <img src="/logo (2).svg" alt="" className='h-10 w-10' />
                    <NextLink href={'/'}>
                        <h1 className='text-xl font-medium'>Code Share</h1>
                    </NextLink>
                </span>
                <div className='flex flex-col items-center justify-center space-y-2'>
                    <h1 className='text-4xl font-semibold'>Create room</h1>
                    <p className={styles.para}>Generate and click create button to make new room</p>
                </div>
                <form onSubmit={handleSubmit} className='space-y-4 mb-4 w-full'>
                    <div className='rounded-md flex items-center gap-2 border px-4 py-2'>
                        <Link2 color='gray' />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder='link'
                            className='outline-none w-full hover:cursor-not-allowed'
                            value={uid}
                            disabled={true}
                            onChange={(e) => setUid(e.target.value)}
                        />
                        <ClipboardCopy color='gray' className='hover:cursor-pointer' onClick={copyToClipboard} />
                    </div>
                    <div className='rounded-md flex items-center gap-2 border px-4 py-2 '>
                        <UserRound color='gray' />
                        <input
                            type="text"
                            placeholder='Username'
                            className='outline-none w-full'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <button type='button' onClick={createLink} className='primary-btn w-full'>✨ Generate link</button>
                    <button type='submit' className='secondary-btn w-full'>Create room</button>
                </form>
                <p className={styles.para}>Already have an invitation link?
                    <NextLink className='hover:underline text-black font-bold' href={"/Room/join"}>
                        Join room
                    </NextLink>
                </p>
            </div>
        </div>
    )
}

export default Page
