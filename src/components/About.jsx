import { Helmet } from 'react-helmet';
import {motion} from 'framer-motion';

const About = () => {
    return (
        <motion.div
        className="px-5 select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity:5 }}
        transition={{ delay: 0.2,duration:0.5 }}
        >
        <Helmet>
            <title>paulpdoa | About</title>
        </Helmet>
           <div>
                <motion.h1 
                initial={{ x:'200vw' }}
                animate={{ x: 0 }}
                transition={{ delay:0 ,duration:0.8, type:'tween' }}
                className="font-bold uppercase text-8xl py-5">About</motion.h1> 
                <div className="grid grid-cols-2 py-16 relative">
                    <div>
                        <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay:1.0,duration:1.5, type:'tween' }}
                        className="text-xl font-semibold">Hi I'm Paul, student of Emilio Aguinaldo College and studying Bachelor of Science in Information Technology. I'm an aspiring web developer and currently studying more about this field.</motion.p>
                    </div>
                    <motion.div 
                    initial={{ y:'-100vw' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                    className="rounded-full shadow-inner bg-gray-200 absolute right-0">
                        <img className="py-15 filter invert-0" src="/me.png" alt="me" />
                    </motion.div>
                    
                </div>
           </div>
        </motion.div>
    )
}

export default About;