import {motion} from 'framer-motion'

const Sidebar = ({nextPage}) => {
    
    return (
        <motion.nav 
        className="hidden md:block relative col-span-1 md:text-right px-5 py-5 text-white bg-red-500 h-screen fixed"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type:'spring',stiffness: 30,duration:0.5 }}
        >
            <div>
                <h1 className="font-extrabold text-gray-100 text-3xl 2xl:text-5xl select-none">paulpdoa</h1>
            </div>
            <ul>
                <p onClick={() => nextPage('header')} className="flex justify-end hover:text-black transition duration-300 font-bold cursor-pointer">
                    <svg className="w-6 h-6 inline-flex self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    <li className="p-5 uppercase text-md 2xl:text-2xl">Home</li>
                </p>
                <p onClick={() => nextPage('about')} className="flex justify-end hover:text-black transition duration-300 font-bold cursor-pointer">
                    <svg className="w-6 h-6 inline-flex self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <li className="p-5 uppercase text-md 2xl:text-2xl">About</li>
                </p>
                <p onClick={() => nextPage('stack')} className="flex justify-end hover:text-black transition duration-300 font-bold cursor-pointer">
                    <svg className="w-6 h-6 inline-flex self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <li className="p-5 uppercase text-md 2xl:text-2xl">Stack</li>
                </p>
                <p onClick={() => nextPage('contact')} className="flex justify-end hover:text-black transition duration-300 font-bold cursor-pointer">
                    <svg className="w-6 h-6 inline-flex self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <li className="p-5 uppercase text-md 2xl:text-2xl">Contact</li>
                </p>
            </ul>
            <footer className="absolute bottom-0 px-5 py-5 right-0">
                <p className="select-none text-md 2xl:text-2xl">&copy; 2021 Paul Andres Portfolio</p>
            </footer>
        </motion.nav>
    )
}

export default Sidebar
