import Link from 'next/link';
import React from 'react';


const Footer = () => {
  return (
    <section className="bg-neutral-950 text-white w-full">
      <div className="flex flex-col px-6 py-20 lg:px-10 xl:px-24">
        {/* TOP CONTAINER */}
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* LEFT DIV */}
          <div className="flex flex-col lg:mr-20">
            {/* LOGO */}
            <span className='flex items-center gap-4 text-gray-100'>
              <img src="/logo.svg" alt="" className='h-10 w-10' />
              <Link href={'/'}>
                <h1 className='text-xl font-semibold text-gray-100'>Code share</h1>
              </Link>
            </span>
            <p className="font-inter my-4 max-w-[350px] text-base font-light text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut al</p>
            {/* NEWSLETTER & EMAIL */}
            <div className="flex flex-col">
              <form action="" className="mb-10 mt-5 max-w-[421px]">
                <div className="relative">
                  <label htmlFor="email" className="font-inter font-medium text-gray-100">SUBSCRIBE TO NEWSLETTER</label>
                  <input type="email" className="font-inter relative mt-4 w-full rounded-md border border-black bg-[#232323] px-6 py-4 text-base text-gray-100" placeholder="Enter your email" name="email" />
                  <button type="submit" className="absolute right-[15px] top-[55px]">
                    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639974a7f44de6baa9a134aa_PaperPlaneTilt%20(1).svg" alt="" className="inline-block" />
                  </button>
                </div>
              </form>
              <div>
                <h3 htmlFor="email" className="font-inter mb-4 mt-8 font-medium text-gray-100">EMAIL US</h3>
                <p className="font-inter text-base text-gray-100">support@flowspark.co</p>
              </div>
            </div>
          </div>
          {/* RIGHT DIV */}
          <div className="mt-7 max-w-[700px] grow lg:flex lg:flex-row">
            {/* FOOTER LINKS */}
            <div className="flex grow flex-row flex-wrap lg:flex-nowrap lg:items-start">
              {/* LINK BLOCK */}
              <div className="my-5 mr-8 flex max-w-[500px] grow basis-[100px] flex-col space-y-5 lg:my-0">
                <h2 className="font-inter font-medium text-gray-100">SOLUTION</h2>
                <a href="" className="font-inter font-light text-gray-100">Marketing</a>
                <a href="" className="font-inter font-light text-gray-100">Analytics</a>
                <a href="" className="font-inter font-light text-gray-100">Commerce</a>
                <a href="" className="font-inter font-light text-gray-100">Insights</a>
              </div>
              {/* LINK BLOCK */}
              <div className="my-5 mr-8 flex max-w-[500px] grow basis-[100px] flex-col space-y-5 lg:my-0">
                <h2 className="font-inter font-medium text-gray-100">SUPPORT</h2>
                <a href="" className="font-inter font-light text-gray-100">Pricing</a>
                <a href="" className="font-inter font-light text-gray-100">Documentation</a>
                <a href="" className="font-inter font-light text-gray-100">Guides</a>
                <a href="" className="font-inter font-light text-gray-100">API Status</a>
              </div>
              {/* LINK BLOCK */}
              <div className="my-5 mr-8 flex max-w-[500px] grow basis-[100px] flex-col space-y-5 lg:my-0 lg:mr-0">
                <h2 className="font-inter font-medium text-gray-100">COMPANY</h2>
                <a href="" className="font-inter font-light text-gray-100">About</a>
                <a href="" className="font-inter font-light text-gray-100">Blog</a>
                <a href="" className="font-inter font-light text-gray-100">Jobs</a>
                <a href="" className="font-inter font-light text-gray-100">Press</a>
                <a href="" className="font-inter font-light text-gray-100">Partners</a>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM CONTAINER */}
        <div className="mt-20 lg:flex lg:flex-row-reverse lg:justify-between">
          {/* SOCIAL MEDIA ICONS */}
          <div className="mb-8 mt-6 flex flex-row lg:mb-0 lg:mt-0">
            <a href="" className="mr-4 transition hover:text-gray-400">
              svg
            </a>
            <a href="" className="mx-4 transition hover:text-gray-400">
              svg
            </a>
            <a href="" className="mx-4 transition hover:text-gray-400">
              svg
            </a>
            <a href="" className="mx-4 transition hover:text-gray-400">
              svg
            </a>
          </div>
          <p className="font-inter text-sm text-gray-500 lg:mt-0">© Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
