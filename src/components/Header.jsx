import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

const Header = () => {

    return (
        <header className="text-gray-800 md:py-0 py-10">
        <motion.div 
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay: 1.2,duration:0.5 }}
        className="md:flex justify-around select-none hidden">
            <h2 className="font-semibold text-gray-800 text-xl">Hello World!</h2>
            <p className="font-semibold text-gray-800 text-xl">I'm Paul Andres!</p>
        </motion.div>
            <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay:1.2, duration:0.5 }}
                className="py-20 px-5 md:-px-5 font-bold overflow-auto md:font-bold text-md text-left md:text-left text-6xl md:text-8xl select-none uppercase">Web Developer</motion.h1>
                <motion.p 
                initial={{ y: '-100vw' }}
                animate={{ y: 0 }}
                transition={{ delay:1,duration:0.5 }}
                className="text-center font-bold m-5 animate-pulse">My Social Medias</motion.p>
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
