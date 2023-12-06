"use client"
import Link from "next/link";

function HeroSection() {

  return (
    <main id="home" className="h-full flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('/images/background.webp')" }}>
      <div className="bg-zinc-50 p-2 rounded shadow-lg hidden lg:block animate-translateBoxX">
        <span className="block p-1 mb-1 hover:bg-cyan-200 rounded duration-500">
          <Link className="" href="https://www.linkedin.com/in/facundo-nahuel-fern%C3%A1ndez-16bb2822b/" target="_blank">
            <svg width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </Link>
        </span>
        <span className="block mb-1 p-1 hover:bg-cyan-200 rounded duration-500">
          <Link className="" href="https://github.com/FACUNDEZ" target="_blank">
            <svg width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </Link>
        </span>
        <span>
          <Link className="block p-1 hover:bg-cyan-200 rounded duration-500" href="https://www.instagram.com/facunadez/" target="_blank">
            <svg width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </Link>
        </span>
      </div>
      <section className="bg-cover bg-center w-full pt-44 pb-36 md:pt-48 md:pb-40 lg:pt-52 lg:pb-44">
        <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug animate-translateX">{'<'} HEY! I AM FACUNDO! {">"}</h1>
        <p className="text-center text-lg md:text-xl lg:text-2xl mt-10 lg:mt-14 mx-5 tracking-wider animate-translateXR">I am a Full-Stack Web Developer and I really want to keep learning so many technologies to improve myself, the projects ahead and my close colleagues!</p>
        <button onClick={() => (window.location.href = "#projects")} className="block rounded m-auto mt-16 shadow-md tracking-wider bg-cyan-500 text-white text-2xl font-bold px-5 py-4 hover:bg-cyan-600 hover:-translate-y-3 duration-500 animate-translateY">Projects</button>
      </section>
    </main>
  );
}

export default HeroSection;
