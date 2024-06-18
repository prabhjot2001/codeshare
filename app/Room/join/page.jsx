'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Link2, UserRound } from 'lucide-react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Page = () => {
    const styles = {
        para: 'text-sm font-medium text-neutral-500 text-center',
    }
    const [InviteLink, setInviteLink] = useState('')
    const [Username, setUsername] = useState('')
    const router = useRouter();

    const joinRoom = (e) => {
        e.preventDefault();
        if (!InviteLink || !Username) {
            toast.error("please fill all the details")
            return;
        }

        console.log(InviteLink, Username)
        router.push(`/editor/${InviteLink}`, {
            Username
        })
    }

    return (
        <div className='flex items-center justify-center min-h-screen w-full'>
            <div className='flex flex-col items-center justify-center p-6 w-full md:w-1/3 space-y-4'>
                <span className='flex justify-center items-center gap-4 mb-4'>
                    <img src="/logo (2).svg" alt="" className='h-10 w-10' />
                    <Link href={'/'}>
                        <h1 className='text-xl font-medium'>Code Share</h1>
                    </Link>
                </span>
                <div className='flex flex-col items-center justify-center space-y-2'>
                    <h1 className='text-4xl font-semibold'>Join room</h1>
                    <p className={styles.para}>Paste invitation link to join room</p>
                </div>

                <form className='space-y-4 mb-4 w-full'>
                    <div className='rounded-md flex items-center gap-2 border px-4 py-2 w-full'>
                        <Link2 color='gray' />
                        <input
                            onChange={(e) => setInviteLink(e.target.value)}
                            value={InviteLink}
                            type="text"
                            placeholder='Paste invitation link here'
                            className='outline-none w-full flex-grow' />
                    </div>

                    <div className='rounded-md flex items-center gap-2 border px-4 py-2 w-full'>
                        <UserRound color='gray' />
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={Username}
                            type="text"
                            placeholder='Username'
                            className='outline-none w-full flex-grow' />
                    </div>

                    <button
                        className='secondary-btn w-full'
                        onClick={joinRoom}>Join room</button>
                </form>

                <p
                    className={styles.para}>
                    Don't have an invitation link?
                    <Link className='hover:underline text-black font-bold' href={"/Room/create"}>
                        Create new room
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Page
