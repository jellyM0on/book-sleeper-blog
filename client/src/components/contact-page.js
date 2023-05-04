import { motion as m } from 'framer-motion';
import Home from './home-page';
import NavTab from './nav-tab';
function Contact(){
    return(
        <div class='works-page'>
            <m.div
             initial={{x:'-100vw'}}
             animate={{x: '10vw'}}
             transition={{duration: 1, ease: 'easeOut'}}
             exit={{opacity:1}}
             className= 'sample'
            >
              
            </m.div>
        </div>
    )
}

export default Contact;