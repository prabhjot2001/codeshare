import React from 'react'
import Link from 'next/link'

const Pricing = () => {
    return (
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                <div className="rounded-2xl border border-[#ffd216] p-6 shadow-sm ring-1 ring-[#ffd216] sm:order-last sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-black">
                            Pro
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-black sm:text-4xl">$15</strong>
                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-1">
                            <span className="text-black">•</span>
                            <span className="text-black">AI Support</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="text-black">•</span>
                            <span className="text-black">Up to 30 users included</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="text-black">•</span>
                            <span className="text-black">10GB of storage</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="text-black">•</span>
                            <span className="text-black">Live video interviews upto 150min </span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="text-black">•</span>
                            <span className="text-black">Chat feature</span>
                        </li>

                    </ul>

                    <Link href="#" className="mt-8 block rounded-full  border border-[#ffd216] bg-[#ffd216] hover:bg-transparent hover:text-black px-12 py-3 text-center text-sm font-medium text-black">
                        Get Started
                    </Link>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-black">
                            Starter
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-black sm:text-4xl">$5</strong>
                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-1">
                            <span className="text-black">•</span>
                            <span className="text-black">Up to 3 users included</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="text-black">•</span>
                            <span className="text-black">2gb storage support</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="text-black">•</span>
                            <span className="text-black">Live video interview upto 45min</span>
                        </li>
                    </ul>

                    <Link href="#" className="mt-8 block rounded-full border border-[#ffd216] bg-white px-12 py-3 text-center text-sm font-medium text-[#ffd216] hover:bg-[#ffd216] hover:text-black">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
