import { motion as m } from 'framer-motion';
import NavTab from './nav-tab';
import Section from './selection-section';

function Works(){
    return(
        <div class='works-page'>
             <Section key='A' content={['a', 'b']}/>
        </div>
    )
}

export default Works;