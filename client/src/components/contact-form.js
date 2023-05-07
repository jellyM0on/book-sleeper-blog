import React from "react";
import SocialLinks from "./social-links";

export default function ContactForm(){
    return(
        <form>
            <input name='sender-name' placeholder="Your name..." maxLength={60} required></input>
            <input name='sender-email' type='email' placeholder="Your email..." required></input>
            <textarea placeholder="Type your message here..." required maxLength={500}></textarea>
            <button type='submit'>submit</button>
        </form>
    )
}