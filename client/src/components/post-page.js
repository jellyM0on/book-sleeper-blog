import ContentEditor from './works-content-editor';
import WorksHeader from "./works-header";
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Post(props){
    const {data} = props; 

    const {font, setFont, fontSize, setFontSize} = useOutletContext(); 
    
    const content = data.content;

    const textStyle = {
        fontFamily: font ? font : 'Times New Roman',
        fontSize: fontSize ? `${fontSize}em` : '1.25em'
    }

    return(
        <div class='works-content' id={data.title}>
                <ContentEditor setFont={setFont} setFontSize={setFontSize} font={font} fontSize={fontSize}/>
                <h2 style={textStyle}>{data.title}</h2>
                <p style={textStyle}>
                    {content}</p>  
        </div>
    )
}