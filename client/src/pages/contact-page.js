import ContactForm from '../components/contact-form';
import ContactInfo from '../components/contact-info';

function Contact(){
    return(
        <div className='contact-page'>
            <ContactInfo/>
            <ContactForm/>
        </div>
    )
}

export default Contact;