import { Helmet } from 'react-helmet';

import Header from './Header';
import About from './About';
import Stack from './Stack';
import Contact from './Contact';

import {motion,AnimatePresence} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react'

const Main = ({page,nextPage}) => {

    const [show,setShow] = useState(false);
    
    return (
        <div className="w-screen md:w-auto md:px-5 md:py-5 col-span-2 text-gray-800 bg-gray-100">
            <Helmet>
                <title>paulpdoa | Home</title>
            </Helmet>
            <div className="flex justify-around md:flex md:justify-between text-gray-100 md:text-gray-800 bg-red-500 md:bg-transparent p-5 rounded w-full md:hidden">
                <motion.h1
                initial={{ opacity:0 }}
                animate={{ opacity:1 }} 
                transition={{ delay:0.2 }}
                className="font-bold text-xl select-none">Hello World!</motion.h1>
                <motion.p
                initial={{ x:'100vw' }}
                animate={{ x:0 }}
                transition={{ delay:0.5, duration:0.5, type:'spring', stiffness:50 }} 
                className="font-bold select-none text-xl">I'm Paul Andres</motion.p>
                <motion.svg onClick={() => setShow(!show)} 
                initial={{ x:'100vw' }}
                animate={{ x: 0 }}
                transition={{ type:'spring',stiffness:90,delay: 1.5 }}
                className="w-6 h-6 self-center md:hidden cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </motion.svg>
            </div>
            { page === 'header' && <Header /> }
            { page === 'about' && <About /> }
            { page === 'contact' && <Contact /> }
            { page === 'stack' && <Stack /> }
            <AnimatePresence>
                    { show && 
                    <motion.div
                        initial={{ y:'-100vw' }}
                        animate={{ y:0 }}
                        transition={{ type:'spring',stiffness:30,duration:0.2 }}
                        exit={{ y:'-100vw' }}    
                        className="absolute top-16 text-white text-right px-10 p-2 bg-red-500 w-full rounded-sm shadow-xl left-0 md:hidden">
                        
                        <div onClick={() => nextPage('header')} className="flex justify-end">
                            <svg className="w-6 h-6 inline-flex self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            <p className="p-2 cursor-pointer font-bold">Home</p>
                        </div>
                       
                        <div onClick={() => nextPage('about')} className="flex justify-end">
                            <svg className="w-6 h-6 inline-flex self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p className="p-2 cursor-pointer font-bold">About</p>
                        </div>

                        <div onClick={() => nextPage('stack')} className="flex justify-end">
                            <svg className="w-6 h-6 inline-flex self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <p className="p-2 cursor-pointer font-bold">Stack</p>
                        </div>
                        
                        <div onClick={() => nextPage('contact')} className="flex justify-end"> 
                            <svg className="w-6 h-6 inline-flex self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <p className="p-2 cursor-pointer font-bold">Contact</p>
                        </div>
                    </motion.div> }
                </AnimatePresence>
        </div>
    )
}

export default Main
