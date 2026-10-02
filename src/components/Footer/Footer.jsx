import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
    return (
        <footer id="About" className='bg-zinc-200 py-10 mt-15'>

            {/* Footer Container */}
            <div className='max-w-350 px-5 sm:px-8 md:px-10 mx-auto
                            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                            gap-10 lg:gap-8'>

                {/* Logo & Description */}
                <div>
                    <a href="#" className='text-3xl font-semibold'>
                        Gr<span className='text-orange-500'>O</span>cify
                    </a>

                    <p className='text-zinc-600 mt-6 max-w-75'>
                        Bred for high content of beneficial substances.
                        Our products are all fresh and healthy.
                    </p>

                    <p className='text-zinc-800 mt-6'>
                        2026 &copy; All rights reserved
                    </p>
                </div>


                {/* Company */}
                <ul>
                    <li>
                        <h5 className='text-2xl text-zinc-800 font-bold'>
                            Company
                        </h5>
                    </li>

                    <li className='mt-6'>
                        <a
                            href="#"
                            className='hover:text-orange-500 text-zinc-800'
                        >
                            About
                        </a>
                    </li>

                    <li className='mt-6'>
                        <a
                            href="#"
                            className='hover:text-orange-500 text-zinc-800'
                        >
                            FAQs
                        </a>
                    </li>
                </ul>


                {/* Support */}
                <ul>
                    <li>
                        <h5 className='text-2xl text-zinc-800 font-bold'>
                            Support
                        </h5>
                    </li>

                    <li className='mt-6'>
                        <a
                            href="#"
                            className='hover:text-orange-500 text-zinc-800'
                        >
                            Support Center
                        </a>
                    </li>

                    <li className='mt-6'>
                        <a
                            href="#"
                            className='hover:text-orange-500 text-zinc-800'
                        >
                            Feedback
                        </a>
                    </li>

                    <li className='mt-6'>
                        <a
                            href="#"
                            className='hover:text-orange-500 text-zinc-800'
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>


                {/* Stay Connected */}
                <div className='w-full'>
                    <h5 className='text-2xl text-zinc-800 font-bold'>
                        Stay Connected
                    </h5>

                    <p className='text-zinc-600 mt-2'>
                        Questions or Feedback? <br />
                        We'd love to hear from you.
                    </p>

                    {/* Email Box */}
                    <div className='flex mt-4 w-full max-w-sm rounded-lg overflow-hidden'>

                        <input
                            className='w-full px-4 py-2 bg-white border-none outline-none focus:outline-none focus:ring-0'
                            type="email"
                            placeholder='Email address'
                            autoComplete='off'
                        />

                        <button
                            className='shrink-0 bg-linear-to-b from-orange-400 to-orange-500
                                       text-white text-3xl font-bold px-3'
                        >
                            <IoIosArrowForward />
                        </button>

                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer
