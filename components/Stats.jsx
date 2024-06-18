import React from 'react'

const Stats = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-semibold sm:text-4xl">Trusted by Developers Worldwide</h2>

                        <p className="mt-4 font-normal text-lg sm:text-lg">
                            Join a growing community of developers who rely on our platform for real-time code sharing, live interviews, collaborative coding, and integrated chat features.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
                            <div className="flex flex-col px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Active Users</dt>
                                <dd className="text-4xl font-semibold  md:text-5xl">1.2m</dd>
                            </div>

                            <div className="flex flex-col px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Code Sessions</dt>
                                <dd className="text-4xl font-semibold  md:text-5xl">3.5m</dd>
                            </div>

                            <div className="flex flex-col px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Projects Created</dt>
                                <dd className="text-4xl font-semibold md:text-5xl">850k</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stats
