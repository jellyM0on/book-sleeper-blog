import Axios from 'axios'; 
import {useState} from 'react'

export default function ContactForm(){
    const [mailStatus, setStatus] = useState()
    const [notifVisible, setVisible] = useState();
    const [mail, setMail] = useState({
        name: '',
        email: '',
        message: '',
    });
  
    function handleChange(e){
        setMail((prev) =>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }


    const submitForm = async (event) => {
        event.preventDefault(); 
        Axios.post('/send', mail)
        .then((response) => {
            if(response.data.status === 'success'){
                setStatus('success');
            } else {
                setStatus('fail'); 
            }
            setMail({name: '', email:'', message:''}); 
        })
    }

    const FormValidator = () => {

        function setVisibleFunc(){
            setVisible(1); 
        }
    
        if (mailStatus === 'success'){
            return(
            <div class='form-result form-success' 
                style={{display: !notifVisible ? 'flex' : 'none'}}>
                <h2>Your message has been sent!</h2>
                <button type='button' onClick={setVisibleFunc} >close</button>
            </div>
            )
        } else if (mailStatus === 'fail'){
            return(
                <div class='form-result form-fail'
                style={{display: !notifVisible ? 'flex' : 'none'}}>
                    <h2>An error occured and your message failed to send!</h2>
                    <button type='button' onClick={setVisibleFunc} >close</button>
                </div>
               
            )
        }
    }

   
    return(
        <form className='contact-form' method='POST' action='/send' onSubmit={submitForm}>
            <p>All fields are required.</p>
            <input onChange={handleChange}name='name' placeholder="Your name..." maxLength={60} minLength={3} required autoComplete="on"></input>
            <input  onChange={handleChange}name='email' type='email' placeholder="Your email..." required autoComplete="on"></input>
            <textarea onChange={handleChange} name='message' placeholder="Type your message here..." required maxLength={500} minLength={5}></textarea>
            <button type='submit'>submit</button>
            <FormValidator/>
        </form>
    )
}