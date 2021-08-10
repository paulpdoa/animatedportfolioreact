import { Helmet } from 'react-helmet';

import Header from './Header';
import About from './About';
import Stack from './Stack';
import Contact from './Contact';

const Main = ({page}) => {
    
    return (
        <div className="w-screen md:w-auto md:px-5 md:py-5 col-span-2 text-gray-800 bg-gray-100">
            <Helmet>
                <title>paulpdoa | Home</title>
            </Helmet>
            { page === 'header' && <Header /> }
            { page === 'about' && <About /> }
            { page === 'contact' && <Contact /> }
            { page === 'stack' && <Stack /> }
        </div>
    )
}

export default Main
