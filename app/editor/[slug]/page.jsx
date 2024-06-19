'use client'
import React, { useEffect, useRef, useState } from 'react'
import SideBar from '@/components/SideBar'
import Editor from '@/components/Editor'
import { initSocket } from '@/client';
import { ACTIONS } from '@/actions';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { Menu } from 'lucide-react';

const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const username = searchParams.get("username");
    const CurrentUsername = username
    const uid = searchParams.get("uid");
    const codeRef = useRef(null)

    const [allUsers, SetAllUsers] = useState([]);

    console.log(username, uid)

    const socketRef = useRef(null);
    useEffect(() => {

        const init = async () => {
            socketRef.current = await initSocket();
            socketRef.current.on('connect_error', (err) => handleErrors(err));
            socketRef.current.on('connect_failed', (err) => handleErrors(err));

            function handleErrors(e) {
                console.log('socket error', e);
                toast.error('Connection failed, try again later')
                router.push('/')
            }
            socketRef.current.emit(ACTIONS.JOIN, {
                roomId: uid,
                username: username
            });


            socketRef.current.on(ACTIONS.JOINED, ({ users, username, socketId }) => {
                if (username != CurrentUsername) {
                    toast.success(`${username} joined the room`)
                    console.log(`${username} joined`)
                }
                SetAllUsers(users)
                socketRef.current.emit(ACTIONS.SYNC_CODE, {
                    code: codeRef.current,
                    socketId
                })
            })

            socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
                toast.success(`${username} has left the room`)
                SetAllUsers((prev) => {
                    return prev.filter((user) => user.socketId != socketId)
                })
            })
        }
        init();

        return () => {
            if (socketRef.current) {
                socketRef.current.off('joined');
                socketRef.current.off('disconnected');
                socketRef.current.disconnect();
            }
        }

    }, [])


    if (!username || !uid) {
        router.push('/Room/create')
    }

    return (
        <div className='flex items-center'>
            {/* <div className='w-[15%]'>
                <SideBar allUsers={allUsers} InvitationLink={uid} />
            </div> */}

            {/* // ---- */}
            <div className={`fixed top-0 left-0 z-40 h-full bg-white shadow-lg transform transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-[15%]`}>
                <SideBar allUsers={allUsers} InvitationLink={uid} toggleDrawer={toggleDrawer} />
            </div>

            <div className='flex-1 md:w-[85%] px-2'>
                <button onClick={toggleDrawer} className='md:hidden absolute top-2 right-2 p-2'>
                    <Menu size={24} />
                </button>
                <Editor socketRef={socketRef} uid={uid} onCodeChange={(code) => { codeRef.current = code; }} />
            </div>

            <style jsx>{`
                @media (min-width: 768px) {
                    .fixed {
                        position: relative;
                    }
                }
            `}</style>
            {/* // ---- */}

            {/* <div className='w-[85%] px-2'>
                <Editor socketRef={socketRef} uid={uid} onCodeChange={(code) => { codeRef.current = code; }} />
            </div> */}

        </div>
    )
}

export default page