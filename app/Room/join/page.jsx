import React from 'react'
import Link from 'next/link'
import { Link2, User } from 'lucide-react'


const page = () => {
    const styles = {
        para: 'text-sm font-medium text-neutral-500 text-center',
    }
    return (
        <div className='flex items-center justify-center min-h-screen w-full'>
            <div className='flex border-4 w-1/3 border-neutral-100 items-center justify-center p-6 rounded-md'>

                {/* ---------header--------- */}
                <div className='space-y-8 w-full'>
                    <div className=''>
                        <span className='flex justify-center items-center gap-4 mb-8'>
                            <img src="/logo (2).svg" alt="" className='h-10 w-10' />
                            <Link href={'/'}>
                                <h1 className='text-xl font-semibold'>Code Share</h1>
                            </Link>
                        </span>

                        <div className='flex flex-col items-center justify-center space-y-2'>
                            <h1 className='text-4xl font-semibold'>Join room</h1>
                            <p className={styles.para}>Paste invitation link to join room</p>
                        </div>
                    </div>

                    <form className='space-y-4 mb-4'>
                        <div className='rounded-md flex items-center gap-2 border px-4 py-2'>
                            <Link2 color='gray' />
                            <input type="text" placeholder='Invitation link' className='outline-none w-full' />
                        </div>

                        <div className='rounded-md flex items-center gap-2 border px-4 py-2 '>
                            <User color='gray' />
                            <input type="text" placeholder='Username' className='outline-none w-full' />
                        </div>

                        <button className='secondary-btn w-full'>Join room</button>
                    </form>
                    <p className={styles.para}>Don't have an invitation link? <Link
                        className='hover:underline' href={"/Room/create"}>Create new room</Link></p>
                </div>
            </div>
        </div>
    )
}

export default page