import { motion as m } from 'framer-motion';
import ContactForm from '../components/contact-form';
import ContactInfo from '../components/contact-info';

function Contact(){
    return(
        <div class='contact-page'>
            <m.div
            //  initial={{x:'-100vw'}}
            //  animate={{x: '10vw'}}
            //  transition={{duration: 1, ease: 'easeOut'}}
            //  exit={{opacity:1}}
            //  className= 'sample'
            >
            <ContactInfo/>
            <ContactForm/>
              
            </m.div>
        </div>
    )
}

export default Contact;