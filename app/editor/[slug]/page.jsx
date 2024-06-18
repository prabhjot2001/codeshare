import React from 'react'
import SideBar from '@/components/SideBar'
import Editor from '@/components/Editor'

const page = () => {
    return (
        <div className='flex items-center'>
            <div className='w-[15%]'>
                <SideBar />
            </div>

            <div className='w-[85%] px-2'>
                <Editor />
            </div>

        </div>
    )
}

export default page