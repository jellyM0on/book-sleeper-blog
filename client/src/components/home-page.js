import React from 'react';
import { useState } from 'react';
import { motion as m } from 'framer-motion';
import Title from './title-heading';
import About from './about';
import LatestPosts from './latest-posts';
import SocialLinks from './social-links';
import homegif from '../img-resources/main-gif.gif'

function Home(){
    return(
        <m.div class='home-page'
        // initial={{x:'0'}}
        // animate={{x: '100vw'}}
        // transition={{duration: 1, ease: 'easeOut'}}
        // exit={{opacity:1}}
        >
            {/* <div class='home-decor-gif'><img src={homegif}></img> </div> */}
            <Title titleClass='home-title'/>
            <About/>
            <LatestPosts/>
            <SocialLinks/>
        </m.div>
    )
}

export default Home;