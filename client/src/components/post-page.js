import ContentEditor from './works-content-editor';
import WorksHeader from "./works-header";
import { useState } from 'react';

export default function Post(props){
    const {data} = props; 

    const [font, setFont] = useState(); 
    const [fontSize, setFontSize] = useState(); 
    
    const content = data.content;

    const textStyle = {
        fontFamily: font ? font : 'Times New Roman',
        fontSize: fontSize ? `${fontSize}em` : '1.25em'
    }

    console.log(font);

    return(
        <div class='works-page'>
            <WorksHeader page={data.title} />
            <div class='works-content post-content'>
                <ContentEditor setFont={setFont} setFontSize={setFontSize} font={font} fontSize={fontSize}/>
                <h2 style={textStyle}>{data.title}</h2>
                <p style={textStyle}>
                    {content}</p>
            </div>     
        </div>
    )
}