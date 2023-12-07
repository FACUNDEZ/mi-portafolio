"use client"
import React from 'react'

function AboutMe() {
    return (
        <section id='about-me' className='h-auto bg-gray-100'>
            <h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-extrabold pt-16 md:pt-20'>{"</"} ABOUT ME {">"}</h1>
            <hr className='mt-5 rounded w-16 md:w-24 m-auto border-4 border-cyan-500 animate-bounceX' />
            <p className='text-sm md:text-base lg:text-lg font-medium leading-6 mt-10 mx-4 lg:mx-6 md:text-center'>Welcome! This section is your gateway to discover more about me — my journey, current projects, and skills, with a primary focus on programming and technology. 🚀💻</p>
            <div className='lg:flex lg:justify-center lg:gap-10 lg:mx-4 md:mt-4'>
                <div className='pb-10 mt-14 lg:w-6/12 lg:mt-14'>
                    <h2 className='font-bold text-2xl lg:text-3xl ml-4 mb-6'>Get to know me!</h2>
                    <p className='mx-4 leading-7 md:text-lg lg:text-xl'>
                        I am Facundo Nahuel Fernández, a passionate junior fullstack developer with two diplomas from the National Technological University of Argentina, one in JavaScript and the other in Next.js. My journey in the world of software development is supported by a strong knowledge of web technologies. Join me as I continue to explore and grow in this exciting technological journey! 💻✨
                    </p>
                    <br />
                    <p className='mx-4 leading-7 md:text-lg lg:text-xl'>
                        I am currently open to new job opportunities that allow me to apply and expand my knowledge. In addition to my interest in software development, I have a strong desire to inspire and support others in their technological journey. If you have questions, collaboration ideas, or just want to chat about development, feel free to contact me! I am eager to connect and share experiences in this exciting world of technology. 💬🚀
                    </p>

                    <button onClick={() => (window.location.href = "#contact")} className="block mt-14 lg:mt-12 ml-4 lg:mb-5 shadow-md rounded bg-cyan-500 text-white text-xl font-bold px-4 py-3 hover:bg-cyan-600 hover:-translate-y-3 duration-500">Contact Me</button>
                </div>
                <div className='pb-16 mt-6 lg:w-6/12 lg:mt-14'>
                    <h2 className='font-bold text-2xl lg:text-3xl ml-4 mb-10'>My Skills</h2>
                    <div className='flex justify-start flex-wrap ml-4 gap-3'>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>HTML</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>CSS</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>Bootstrap</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>JavaScript</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>React</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>NextJS</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>Tailwind</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>NodeJS/ExpressJS</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>SQL/MySQL</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>Typescript</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>Prisma (ORM)</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>Git</span>
                        <span className='bg-zinc-200 text-zinc-600 py-2 px-3 max-w-sm rounded font-bold'>GitHub</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe