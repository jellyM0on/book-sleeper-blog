import React from 'react';
import { useState } from 'react';
import NavTab from './nav-tab';
import { motion } from 'framer-motion';

function Home(){
    return(
        <div class='home-page'>
            <div class='nav-container'>
                <NavTab title='contact'/>
                <NavTab title='works'/>
            </div>

            <motion.div class='main-content'>
                <div class='headings'>
                    <div class='about'>
                        <h2>author's note</h2>
                        <p>Sample text</p>
                    </div>
                    <div class='title'>
                        <h1>book sleeper</h1>
                        <h2>by yl</h2>
                    </div>
                </div>
                <div class='latest-works'>
                    <h2>latest works</h2>
                    <p>sample text</p>
                </div>
            </motion.div>

            {/* div */}
        </div>
    )
}

export default Home;