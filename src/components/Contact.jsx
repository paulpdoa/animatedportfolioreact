import {Helmet} from 'react-helmet';
import { SocialIcon } from 'react-social-icons';

import {useState} from 'react';

import {CopyToClipboard} from 'react-copy-to-clipboard';


const Contact = () => {

    const [email,setEmail] = useState('polopdoandres@gmail.com');
    const[copyEmail,setCopyEmail] = useState(false);

    const onCopy = () => {
        setCopyEmail(true);
            setTimeout(() => {
                setCopyEmail(false);
            },1000)
    }

    return (
        <div>
        <Helmet>
            <title>paulpdoa | Contact</title>
        </Helmet>
            <div className="px-5">
                <h1 className="font-bold uppercase text-8xl py-5 select-none">Contact me</h1>
                <form className="grid grid-cols-2 border-2 border-gray-600 rounded-xl">
                    <div className="px-5 py-5">
                        <div className="py-2">
                            <label htmlFor="firstname">First Name</label><br/>
                            <input className="bg-gray-100 p-2 border-b-2 border-gray-600 outline-none" type="text" placeholder="Enter first name"  />
                        </div>
                        <div className="py-2">
                            <label htmlFor="email">Email</label><br/>
                            <input className="bg-gray-100 p-2 border-b-2 border-gray-600 outline-none" type="email" placeholder="Enter email"  />
                        </div>
                        <div className="py-2">
                            <label htmlFor="firstname">Message</label><br/>
                            <input className="bg-gray-100 p-2 border-b-2 border-gray-600 outline-none" type="text" placeholder="Enter message"  />
                        </div>
                        <div>
                            <button className="p-2 bg-gray-900 text-gray-200 rounded-full mt-2 w-40 outline-none transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl">Contact Me</button>
                        </div>
                    </div>
                    <div className="px-5 py-5 relative">
                        <div className="">
                            <h2 className="font-semibold text-xl text-gray-800 select-none">Contact</h2>
                            <div className="flex">
                                <CopyToClipboard text={email} onCopy={onCopy}>
                                    <div className="flex">
                                        <p className="select-none">polopdoandres@gmail.com</p>
                                        <svg onCopy={() => setCopyEmail(true)} className="w-6 h-6 animate-pulse cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                        </svg>
                                        { !copyEmail ? '' : <p className="text-red-500 font-semibold inline-block">Copied!</p> }
                                    </div>
                                </CopyToClipboard>
                            </div>
                        </div>
                        <div className="py-5 select-none">
                            <h2 className="font-semibold text-xl text-gray-800">Based In</h2>
                            <p>Tanza, Cavite</p>
                        </div>
                        <div className="flex justify-evenly px-15">
                            <SocialIcon className="transition transform hover:scale-150" url="https://www.facebook.com/paulpdoa/" />
                            <SocialIcon className="transition transform hover:scale-150" url="https://www.instagram.com/paulpdoa/?hl=en" />
                            <SocialIcon className="transition transform hover:scale-150" url="https://discord.com/users/846637204800798720" />
                            <SocialIcon className="transition transform hover:scale-150" url="https://github.com/paulpdoa" />
                            <SocialIcon className="transition transform hover:scale-150" url="https://mail.google.com/mail/u/0/#inbox" />
                        </div>
                        <div className="absolute bottom-0 py-10">
                            <h3 className="font-light text-gray-500 select-none">This page is created with ReactJS and TailwindCSS</h3>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
