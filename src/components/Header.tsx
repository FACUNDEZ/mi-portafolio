"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-zinc-50 lg:py-3 py-1 fixed top-0 right-0 left-0 z-10">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 md:h-auto items-center justify-between">
                    <div className="">
                        <Link className="text-teal-600 inline-flex items-center" href="/">
                            <Image className='rounded-full' src="/images/yo.webp" width={40} height={40} alt='person-image'></Image>
                            <p className='pl-3 text-black font-bold text-base lg:text-lg hover:text-cyan-500 duration-200'>Facundo Fernández</p>
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className={`${isOpen ? 'block w-full md:hidden absolute top-16 mt-2 left-0' : 'hidden'} md:flex`}>
                            <div className="block md:hidden overflow-y-auto bg-white shadow-sm animate-opacityNav">                            
                                <ul className="space-y-2 text-right font-medium md:block">
                                    <li className='border-b-2 border-solid border-gray-100 pb-3 -mt-2'>
                                        <Link href="#home" className="mt-5 text-xl flex items-center p-2 text-black hover:text-cyan-500 duration-300 rounded-lg group">
                                            <span className="flex-1 mr-3">Home</span>
                                        </Link>
                                    </li>
                                    <li className='border-b-2 border-solid border-gray-100 pb-3'> 
                                        <Link href="#about-me" className="text-xl flex items-center p-2 text-black hover:text-cyan-500 duration-300 rounded-lg group">
                                            <span className="flex-1 mr-3">About Me</span>
                                        </Link>
                                    </li>
                                    <li className='border-b-2 border-solid border-gray-100 pb-3'>
                                        <Link href="#projects" className="text-xl flex items-center p-2 text-black hover:text-cyan-500 duration-300 rounded-lg group">
                                            <span className="flex-1 mr-3">Projects</span>
                                        </Link>
                                    </li>
                                    <li className='border-b-2 border-solid border-gray-100 pb-3'>
                                        <Link href="#contact" className="text-xl flex items-center p-2 text-black hover:text-cyan-500 duration-300 rounded-lg group">
                                            <span className="flex-1 mr-3">Contact</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <ul className="font-bold hidden md:flex items-center">
                                    <li className=''>
                                        <Link href="#home" className="mt-5 text-base lg:text-lg p-2 text-black hover:text-cyan-500 duration-300 group">
                                            <span className="ml-4">Home</span>
                                        </Link>
                                    </li>
                                    <li className=''> 
                                        <Link href="#about-me" className="text-base lg:text-lg p-2 text-black hover:text-cyan-500 duration-300 group">
                                            <span className="ml-4">About Me</span>
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link href="#projects" className="text-base lg:text-lg  p-2 text-black hover:text-cyan-500 duration-300 group">
                                            <span className="ml-4">Projects</span>
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link href="#contact" className="text-base lg:text-lg p-2 text-black hover:text-cyan-500 duration-300 group">
                                            <span className="ml-4">Contact</span>
                                        </Link>
                                    </li>
                                </ul>
                        </nav>

                        {!isOpen ? (
                            <div className="block md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="rounded p-2 text-black transition"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            <div className="block md:hidden">
                                <button onClick={() => setIsOpen(!isOpen)}>
                                    <svg
                                        width="35"
                                        height="35"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#000000"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M18 6l-12 12" />
                                        <path d="M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header