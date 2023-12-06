"use client"
import { useState, useRef, FormEvent } from "react"
import { send } from "@emailjs/browser";

function ContactSection() {
    let nameRef = useRef(null)
    let emailRef = useRef(null)
    let messageRef = useRef(null)

    const [emailSent, setEmailSent] = useState(false)
    const [showIncompleteDataModal, setShowIncompleteDataModal] = useState(false);

    function sendMessage(evento: FormEvent) {
        evento.preventDefault();

        //@ts-ignore
        if (!nameRef.current?.value || !emailRef.current?.value || !messageRef.current?.value) {
            setShowIncompleteDataModal(true)
            document.body.style.overflow = "hidden"
            return
        }

        let templateParams = {
            //@ts-ignore
            user_email: emailRef.current?.value,
            //@ts-ignore
            from_name: nameRef.current?.value,
            //@ts-ignore
            to_name: "facu.mdq@live.com",
            //@ts-ignore
            message: messageRef.current?.value
        };

        send("service_sr4q5ax", "template_ztw5m0s", templateParams, "ewwgdg3MgDbAQPrRw");

        if (!emailSent) {
            setEmailSent(true);
            document.body.style.overflow = "hidden"
            //@ts-ignore
        nameRef.current.value = ""
        //@ts-ignore

         emailRef.current.value = ""
        //@ts-ignore

         messageRef.current.value = ""
            return
        }
    }

    return (
        <section id="contact" className="bg-cover bg-center h-auto w-full pb-16 lg:pb-20 relative overflow-hidden" style={{ backgroundImage: "url('/images/background.webp')" }}>
            <h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-extrabold pt-16 md:pt-20'>CONTACT</h1>
            <hr className='mt-5 rounded w-16 md:w-24 m-auto border-4 border-cyan-500 animate-bounceX' />
            <p className='text-center text-sm md:text-base lg:text-lg my-8 md:my-11 lg:my-12 mx-4'>Send me a message and I will answer you as soon as possible. Feel free to contact me!</p>
            <div className="bg-white mx-8 md:mx-10 lg:mx-40 rounded-lg p-10 mb-5 shadow-md">
                <form onSubmit={sendMessage} action="action" className="space-y-4">
                    <div className='mb-6'>
                        <h2 className='text-sm font-bold mb-2'>Name</h2>
                        <label className="sr-only" htmlFor="name">Name</label>
                        <input
                            ref={nameRef}
                            className="w-full rounded-lg bg-gray-100 p-4 text-sm focus:outline-none"
                            placeholder="Enter your name"
                            type="text"
                            id="name"
                        />
                    </div>

                    <div className='mb-6'>
                        <h2 className='text-sm font-bold mb-2'>Email</h2>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            ref={emailRef}
                            className="w-full rounded-lg bg-gray-100 p-4 text-sm focus:outline-none"
                            placeholder="Enter your email adress"
                            type="email"
                            id="email"
                        />
                    </div>

                    <div>
                        <h2 className='text-sm font-bold mb-2'>Message</h2>
                        <label className="sr-only" htmlFor="message">Message</label>

                        <textarea
                            ref={messageRef}
                            className="w-full h-52 rounded-lg bg-gray-100 p-4 text-sm focus:outline-none"
                            placeholder="Write a message"
                            id="message"
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="inline-block w-full mt-5 font-bold rounded-md bg-cyan-500 px-5 py-3 hover:bg-cyan-600 duration-500 text-white sm:w-auto"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {emailSent && (
                <div className="fixed inset-0 w-full h-full z-10">
                    <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
                    <section className="relative rounded-lg mx-4 sm:mx-auto sm:w-full md:mx-auto md:w-1/2 lg:mx-auto lg:w-1/3 mt-40 shadow-2xl bg-white animate-translateYT">
                        <div className="p-12 text-center sm:p-12">
                            <p className="text-sm font-semibold tracking-widest text-cyan-500">
                                Your message was sent successfully!
                            </p>

                            <h2 className="mt-6 text-2xl font-bold">
                                Thanks for taking your time sending me a message!
                            </h2>

                            <button
                                onClick={() => {
                                    setEmailSent(false)
                                    document.body.style.overflow = 'auto'
                                }}
                                className="mt-8 inline-block w-52 rounded-lg bg-cyan-500 hover:bg-cyan-600 duration-500 py-4 text-sm font-bold text-white shadow-xl"
                            >
                                CLOSE
                            </button>
                        </div>
                    </section>
                </div>
            )}


            {showIncompleteDataModal && (
                <div className="fixed inset-0 w-full h-full z-10">
                    <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
                    <section className="relative rounded-lg mx-4 sm:mx-auto sm:w-full md:mx-auto md:w-1/2 lg:mx-auto lg:w-1/3 mt-40 shadow-2xl bg-white animate-translateYT">
                        <div className="p-12 text-center sm:p-12">
                            <p className="text-sm font-semibold tracking-widest text-cyan-500">
                                Oh! There was a problem.
                            </p>

                            <h2 className="mt-6 text-2xl font-bold">
                                You have to complete all the information on the form.
                            </h2>

                            <button
                                onClick={() => {
                                    setShowIncompleteDataModal(false)
                                    document.body.style.overflow = 'auto'
                                }}
                                className="mt-8 inline-block w-52 rounded-lg bg-cyan-500 hover:bg-cyan-600 duration-500 py-4 text-sm font-bold text-white shadow-xl"
                            >
                                CLOSE
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </section>
    )
}

export default ContactSection
