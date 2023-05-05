import React from 'react';
import { useState } from 'react';
import { motion as m } from 'framer-motion';

import Title from '../components/title-heading'
import About from '../components/about';
import LatestPosts from '../components/latest-posts';
import SocialLinks from '../components/social-links';


function Home(props){
    const {latestData} = props;

    return(
        <m.div class='home-page'
        // initial={{x:'0'}}
        // animate={{x: '100vw'}}
        // transition={{duration: 1, ease: 'easeOut'}}
        // exit={{opacity:1}}
        >
            <Title titleClass='home-title'/>
            <About/>
            <LatestPosts data={latestData}/>
            <SocialLinks/>
        </m.div>
    )
}

export default Home;