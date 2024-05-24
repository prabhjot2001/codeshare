import React from 'react'
import Link from 'next/link'
import { LogIn } from 'lucide-react'


const Nav = () => {
    return (
        <nav className='flex items-center justify-between h-20 w-full'>
            <span className='flex items-center gap-4'>
                <img src="/logo (2).svg" alt="" className='h-10 w-10' />
                <Link href={'/'}>
                    <h1 className='text-xl font-semibold'>Code share</h1>
                </Link>
            </span>
            <span className='flex items-center gap-4 font-medium'>
                <Link className='hover:underline ' href={'/'}>Features</Link>
                <Link className='hover:underline' href={'/'}>About us</Link>
                <Link className='hover:underline' href={'/Auth/create-account'}>
                    <button className='primary-btn flex gap-1' >Login <LogIn color='white' /> </button>
                </Link>

            </span>
        </nav>
    )
}

export default Nav