import Cookieconsent from '@/components/CookieConsent'
import Nav from '@/components/Nav'
import Link from 'next/link'
import OfferBanner from '@/components/OfferBanner'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Testimonial from '@/components/Testimonial'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'

const page = () => {
    return (
        <>
            <OfferBanner />
            <Nav />
            <section className='px-2 mb-20 sm:px-10'>
                <section className='flex justify-between items-center mb'>
                    <Hero />
                    <Cookieconsent />
                </section>


                <section className=''>
                    <h2 className='text-2xl heading-2 mb-10 text-white'>Features</h2>
                </section>

                <section>
                    <Features />
                </section>

                <section>
                    <h2 className="text-3xl text-center font-semibold sm:text-4xl">Pricing</h2>
                    <Pricing />
                </section>

                <section>
                    <Stats />
                </section>

                {/* <section>
                    <Testimonial />
                </section> */}

            </section>

            <Footer />
        </>
    )
}

export default page