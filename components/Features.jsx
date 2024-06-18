import React from 'react'
import { Code, Video, Users, MessageSquare, Share2,Brain } from 'lucide-react';

const Features = () => {
    return (
        <div>
            <section>
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-3xl font-semibold sm:text-4xl">Discover Our Features</h2>
                            <p className='font-normal mt-4 text-lg'>
                                Enhance your coding experience with our suite of tools designed for real-time collaboration and communication.
                            </p>
                            <img src='/img31.png' className="mt-8 h-80 w-80  inline-block"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <Share2 />
                                </span>
                                <h2 className="mt-2 font-bold">Real-Time Code Sharing</h2>
                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Collaborate on code in real-time with developers across the globe.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <Video />
                                </span>
                                <h2 className="mt-2 font-bold">Live Video Interviews</h2>
                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Conduct interviews with live video and real-time code sharing for a seamless experience.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <Users />
                                </span>
                                <h2 className="mt-2 font-bold">Group Coding Sessions</h2>
                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Code collaboratively with your team in real-time, boosting productivity and learning.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <MessageSquare />
                                </span>
                                <h2 className="mt-2 font-bold">Chat Features</h2>
                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Communicate instantly with teammates through our integrated chat feature.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <Brain />
                                </span>
                                <h2 className="mt-2 font-bold">AI Features</h2>
                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Debug and ask questions through our integrated AI feature.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
