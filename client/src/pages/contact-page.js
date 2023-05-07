import { motion as m } from 'framer-motion';
import ContactForm from '../components/contact-form';
import ContactInfo from '../components/contact-info';

function Contact(){
    return(
        <div class='contact-page'>

            <ContactInfo/>
            <ContactForm/>
        </div>
    )
}

export default Contact;