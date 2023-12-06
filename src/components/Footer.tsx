import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-black h-auto z-0">
            <div
                className="relative mx-auto max-w-screen-xl px-4 pt-11 pb-10 sm:px-6 lg:px-8 lg:pt-24"
            >
                <div className='md:flex md:justify-between md:flex-row-reverse md:items-center md:mt-2 lg:-mt-10 md:mx-3 md:mb-4'>
                    <div className='md:flex md:flex-col ml-2'>
                        <h3 className='text-white font-bold text-md md:text-lg lg:text-xl tracking-wider uppercase md:-mt-5 lg:-mt-7'>SOCIAL MEDIA</h3>
                        <ul
                            className="mt-6 flex flex-wrap justify-left items-center md:gap-2 md:mt-4 lg:justify-end "
                        >
                            <li>
                                <Link className="transition" href="https://www.linkedin.com/in/facundo-nahuel-fern%C3%A1ndez-16bb2822b/" target='_blank'>
                                    <svg width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                        <path d="M8 11l0 5" />
                                        <path d="M8 8l0 .01" />
                                        <path d="M12 16l0 -5" />
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" href="https://github.com/FACUNDEZ" target='_blank'>
                                    <svg width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" href="https://www.instagram.com/facunadez/" target='_blank'>
                                    <svg width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M16.5 7.5l0 .01" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='md:flex md:flex-col md:text-left ml-2'>
                        <div className="mt-9 md:mt-8 text-white text-md md:text-lg lg:text-xl font-bold tracking-wider ">
                            FACUNDO FERNÁNDEZ
                        </div>

                        <p
                            className="mt-5 mb-5 md:mt-4 max-w-md text-left text-xs md:text-sm tracking-wider leading-relaxed text-white"
                        >
                            Thank you for exploring my digital space, where I bring magical stories to life in my projects fueled by my passion for what I love.
                        </p>
                    </div>
                </div>
            </div>
            <hr className='-mt-4 w-sm mx-9 lg:mx-36 m-auto border-gray-500' />
            <p className="pb-10 mt-10 text-center text-xs text-white">
                Copyright &copy; 2023. Created by Facundo Nahuel Fernández. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer