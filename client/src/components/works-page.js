import { motion as m } from 'framer-motion';
import NavTab from './nav-tab';
import Section from './selection-section';

function Works(props){
    const {data} = props; 

    return(
        <div class='works-page'>
             <Section key='A' data={data}/>
        </div>
    )
}

export default Works;