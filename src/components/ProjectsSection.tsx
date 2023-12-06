"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function ProjectsSection() {
    const router = useRouter() 

    return (
        <section id='projects' className='h-auto bg-white z-0'>
            <h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-extrabold pt-16 md:pt-20'>{"</"} PROJECTS {">"}</h1>
            <hr className='mt-5 rounded w-16 md:w-24 m-auto border-4 border-cyan-500 animate-bounceX' />
            <p className='text-sm md:text-base lg:text-lg font-medium leading-6 mt-10 lg:mt-14 mb-12 mx-4 md:mx-6 md:text-center'>Immerse yourself in the universe of my projects and discover the diversity of challenges I tackled as a junior fullstack developer. This section gives you a detailed look at the solutions it has created, from innovative concepts to functional web applications. Each project tells a story of learning and creativity.</p>
            <div className='flex flex-col justify-center items-center lg:max-w-[80%] lg:justify-evenly lg:flex-row lg:m-auto pb-10 mt-16 lg:mt-20'>
                <div className="relative group w-96 lg:w-3/5 lg:ml-20">
                    <Image className='group-hover:opacity-40 duration-300 rounded-xl lg:rounded-lg lg:w-11/12' src="/images/projects/img-1.webp" height={500} width={500} alt="Proyect-1"></Image>
                    <div className="absolute top-1/3 left-1/3 opacity-0 group-hover:opacity-100 duration-300">
                        <div className="flex items-center">
                            <Link className='hover:text-zinc-800 duration-300 text-sm lg:text-lg' href="https://github.com/FACUNDEZ" target="_blank">
                                <svg width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor" />
                                </svg>
                            </Link>
                            <Link className='hover:text-zinc-800 duration-300' href="#" target="_blank">
                                <svg width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M3.6 9h16.8" />
                                    <path d="M3.6 15h16.8" />
                                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='text-center my-6 lg:w-2/5 lg:ml-10'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl text-cyan-500 font-bold lg:text-left'>Chat App</h1>
                    <p className='text-sm md:text-base lg:text-lg my-4 mx-4 lg:mx-0 lg:text-left'>This is a real time chat app full-stack that I created in the diploma of Nextjs.</p>
                    <button onClick={() => router.push("/projects/first-project")} className='flex items-center justify-center gap-2 m-auto mt-6 lg:mx-0 bg-cyan-500 px-4 py-3 text-white font-bold rounded shadow-md hover:bg-cyan-600 duration-500'>Read More <svg width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor" />
                    </svg></button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center lg:max-w-[80%] lg:justify-evenly lg:flex-row lg:m-auto pb-10 mt-6 lg:mt-16'>
                <div className="relative group w-96 lg:w-3/5 lg:ml-20">
                    <Image className='group-hover:opacity-40 duration-300 rounded-xl lg:rounded-lg lg:w-11/12' src="/images/projects/img-2.webp" height={500} width={500} alt="Proyect-2"></Image>
                    <div className="absolute top-1/3 left-1/3 opacity-0 group-hover:opacity-100 duration-300">
                        <div className="flex items-center">
                            <Link className='hover:text-zinc-800 duration-300 text-sm lg:text-lg' href="https://github.com/FACUNDEZ" target="_blank">
                                <svg width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor" />
                                </svg>
                            </Link>
                            <Link className='hover:text-zinc-800 duration-300' href="#" target="_blank">
                                <svg width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M3.6 9h16.8" />
                                    <path d="M3.6 15h16.8" />
                                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='text-center my-6 lg:w-2/5 lg:ml-10'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl text-cyan-500 font-bold lg:text-left'>Video Call App</h1>
                    <p className='text-sm md:text-base lg:text-lg my-4 mx-4 lg:mx-0 lg:text-left'>This project is about a video call app that we created with a group of teammates that is full-stack with a lot of interesting technologies.</p> 
                    <button onClick={() => router.push("/projects/second-project")} className='flex items-center justify-center gap-2 m-auto mt-6 lg:mx-0 bg-cyan-500 px-4 py-3 text-white font-bold rounded shadow-md hover:bg-cyan-600 duration-500'>Read More <svg width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor" />
                    </svg></button>
                </div>
            </div>
            
            <div className='flex flex-col justify-center items-center lg:max-w-[80%] lg:justify-evenly lg:flex-row lg:m-auto pb-10 mt-6 lg:mt-16'>
                <div className="relative group w-96 lg:w-3/5 lg:ml-20">
                    <Image className='group-hover:opacity-40 duration-300 rounded-xl lg:rounded-lg lg:w-11/12' src="/images/projects/img-3.webp" height={500} width={500} alt="Proyect-3"></Image>
                    <div className="absolute top-1/3 left-1/3 opacity-0 group-hover:opacity-100 duration-300">
                        <div className="flex items-center">
                            <Link className='hover:text-zinc-800 duration-300' href="https://github.com/FACUNDEZ" target="_blank">
                                <svg width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor" />
                                </svg>
                            </Link>
                            <Link className='hover:text-zinc-800 duration-300' href="#" target="_blank">
                                <svg width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M3.6 9h16.8" />
                                    <path d="M3.6 15h16.8" />
                                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='text-center my-6 lg:w-2/5 lg:ml-10'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl text-cyan-500 font-bold lg:text-left'>E-commerce</h1>
                    <p className='text-sm md:text-base lg:text-lg my-4 mx-4 lg:mx-0 lg:text-left'>More about full-stack projects. Project based in a famous api about a lot of type of products.</p>
                    <button onClick={() => router.push("/projects/third-project")} className='flex items-center justify-center gap-2 m-auto mt-6 lg:mx-0 bg-cyan-500 px-4 py-3 text-white font-bold rounded shadow-md hover:bg-cyan-600 duration-500'>Read More <svg width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor" />
                    </svg></button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center lg:max-w-[80%] lg:justify-evenly lg:flex-row lg:m-auto pb-10 mt-6 lg:mt-16'>
                <div className="relative group w-96 lg:w-3/5 lg:ml-20">
                    <Image className='group-hover:opacity-40 duration-300 rounded-xl lg:rounded-lg lg:w-11/12' src="/images/projects/img-4.webp" height={500} width={500} alt="Proyect-4"></Image>
                    <div className="absolute top-1/3 left-1/3 opacity-0 group-hover:opacity-100 duration-300">
                        <div className="flex items-center">
                            <Link className='hover:text-zinc-800 duration-300' href="https://github.com/FACUNDEZ" target="_blank">
                                <svg width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor" />
                                </svg>
                            </Link>
                            <Link className='hover:text-zinc-800 duration-300' href="#" target="_blank">
                                <svg width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M3.6 9h16.8" />
                                    <path d="M3.6 15h16.8" />
                                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='text-center my-5 lg:w-2/5 lg:ml-10'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl text-cyan-500 font-bold lg:text-left'>Q&A Game</h1>
                    <p className='text-sm md:text-base lg:text-lg my-4 mx-4 lg:mx-0 lg:text-left'>A full-stack basic game about questions and answers.</p>
                    <button onClick={() => router.push("/projects/fourth-project")} className='flex items-center justify-center gap-2 m-auto mt-6 lg:mx-0 bg-cyan-500 px-4 py-3 text-white font-bold rounded shadow-md hover:bg-cyan-600 duration-500'>Read More <svg width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor" />
                    </svg></button>
                </div>
            </div>

            <Link href="https://github.com/FACUNDEZ" target='_blank' className='block w-28 text-sm lg:text-base text-center mb-14 lg:mb-20 lg:mt-12 m-auto text-black underline hover:text-cyan-600'>More Projects</Link>
        </section>
    )
}

export default ProjectsSection