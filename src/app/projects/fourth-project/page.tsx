"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Page() {
    const router = useRouter()

    return (
        <>
            <header className="bg-zinc-50 lg:py-3 py-1 fixed top-0 right-0 left-0 z-10">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="">
                            <Link className="text-teal-600 inline-flex items-center" href="/">
                                <Image className='rounded-full' src="/images/yo.webp" width={40} height={40} alt='person-image'></Image>
                                <p className='pl-3 text-black font-bold text-base lg:text-lg hover:text-cyan-500 duration-200'>Facundo Fernández</p>
                            </Link>
                        </div>
                        <button onClick={() => router.push("/")} className='bg-cyan-500 rounded shadow-md text-white px-3 py-2 hover:bg-cyan-600 duration-500 ml-3 font-bold'>Go Back</button>
                    </div>
                </div>
            </header>
            <main className="h-full flex items-center justify-center overflow-hidden">
                <section className="bg-cover bg-center w-full pt-48 pb-40 md:pt-48 md:pb-40 lg:pt-52 lg:pb-44" style={{ backgroundImage: "url('/images/background.webp')" }}>
                    <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold leading-snug animate-translateX">&#60; CHAT APP &#62;</h1>
                    <hr className='mt-3 rounded w-16 md:w-24 m-auto border-4 border-cyan-500 animate-bounceX' />
                    <p className="text-center text-lg md:text-xl lg:text-2xl mt-12 lg:mt-16 mx-2 tracking-wider animate-translateXR">I wrote a description in this page for you telling about my chat app project that I made. I hope you enjoy it so much!</p>
                    <button className="block rounded m-auto mt-16 shadow-md tracking-wider bg-cyan-500 text-white text-2xl font-bold px-5 py-4 hover:bg-cyan-600 hover:-translate-y-3 duration-500 animate-translateY">Live Link</button>
                </section>
            </main>

            <section className='bg-gray-100 h-full w-full md:m-auto pt-14 pb-14 md:flex md:flex-col md:justify-start md:px-20 lg:px-60'>
                <h2 className='font-bold text-xl md:text-2xl lg:text-3xl ml-5 lg:mt-5'>Project Overview</h2>
                <p className='mx-5 mt-5 md:mt-7 leading-6 text-sm md:text-base'>My fullstack chat application provides a comprehensive and secure experience for users. The login and registration process has been carefully designed to ensure maximum security and data privacy. I have implemented an instant communication system backed by sockets, ensuring dynamic and real-time interaction among users.</p><br />
                <p className='mx-5 leading-6 text-sm md:text-base'> The list of connected users is automatically updated, providing a real-time view of the activity within the platform. Furthermore, we have strengthened authentication through the implementation of tokens, further enhancing system security and protecting user identity.</p><br />
                <p className='mx-5 leading-6 text-sm md:text-base'>In short, our chat app not only prioritizes security and privacy, but also strives to offer an efficient, reliable and easy-to-use platform to meet all your online communication needs.</p>
                <div className='mt-12'>
                    <h2 className='font-bold text-xl md:text-2xl lg:text-3xl ml-5 mb-6'>Tools Used</h2>
                    <div className='flex justify-start ml-5 flex-wrap gap-2 md:gap-3 lg:mt-9'>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold md:text-base lg:text-lg'>React</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold md:text-base lg:text-lg'>NextJS</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold md:text-base lg:text-lg'>Tailwind</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold md:text-base lg:text-lg'>NodeJS/ExpressJS</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold md:text-base lg:text-lg'>Prisma (ORM)</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold md:text-base lg:text-lg'>Git</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold md:text-base lg:text-lg'>GitHub</span>
                    </div>
                </div>
                <div className='mt-12 lg:mb-5'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold ml-5'>See Live</h2>
                    <div className='flex flex-col justify-start md:flex-row md:items-center'>
                        <button className="block ml-5 rounded mt-7 lg:mt-9 md:my-6 shadow-md bg-cyan-500 text-white text-lg font-bold py-3 w-2/6 md:max-w-xs hover:bg-cyan-600 hover:translate-x-3 md:hover:-translate-y-3 md:hover:translate-x-0 duration-500">Repository</button>
                        <button className='bg-gray-100 rounded border-2 mt-3 lg:mt-9 md:my-6 ml-5 py-3 font-bold w-2/6 md:max-w-xs border-cyan-500 hover:translate-x-3 md:hover:-translate-y-3 md:hover:translate-x-0 duration-500'>Live Link</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page