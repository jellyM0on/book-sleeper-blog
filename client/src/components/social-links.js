import githubicon from '../img-resources/github.svg'
import linkedinicon from '../img-resources/linkedin.svg'

export default function SocialLinks(){
    return(
        <div className='social-links'>
            <a href='https://github.com/jellyM0on' target='_blank'><img src={githubicon} ></img> </a>
            <a href='https://www.linkedin.com/in/28b8b6259/' target='_blank'> <img src={linkedinicon}></img> </a>
           
        </div>
    )
}