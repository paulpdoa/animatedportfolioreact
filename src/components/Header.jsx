import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
    return (
        <header className="text-gray-800">
            <div className="flex justify-between bg-red-500 md:bg-transparent p-5 rounded w-full">
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
                <svg className="w-6 h-6 self-center md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div>
            <motion.h1 
            initial={{ fontSize: 0 }}
            animate={{ fontSize: '100px' }}
            transition={{ delay:1.2, duration:0.5 }}
            className="py-20 px-5 -px-5 font-bold text-center md:text-left text-6xl md:text-8xl select-none uppercase">Web Developer</motion.h1>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay:1.5, duration:0.5 }} 
            className="flex justify-around">
                <SocialIcon className="transition transform hover:scale-150" url="https://www.facebook.com/paulpdoa/" />
                <SocialIcon className="transition transform hover:scale-150" url="https://www.instagram.com/paulpdoa/?hl=en" />
                <SocialIcon className="transition transform hover:scale-150" url="https://discord.com/users/846637204800798720" />
                <SocialIcon className="transition transform hover:scale-150" url="https://github.com/paulpdoa" />
                <SocialIcon className="transition transform hover:scale-150" url="https://mail.google.com/mail/u/0/#inbox" />
            </motion.div>
        </header>
    )
}

export default Header
