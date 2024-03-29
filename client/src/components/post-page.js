import { useOutletContext } from 'react-router-dom';
import { useWorksContext } from "../hooks/useWorksContext";

import ContentEditor from './works-content-editor';
import PostNav from './post-page-nav'; 

export default function Post({postData}){
    const { works } = useWorksContext();

    const {font, setFont, fontSize, setFontSize, sortedData} = useOutletContext(); 

    let collapsedData = []; 
    
    if (sortedData){
        sortedData.forEach((d,i) => {
           d.works.forEach((x, i) => {
            collapsedData.push(x); 
           })
        })
    } else {
        collapsedData = works; 
    }
    
    const content = postData.content;

    const textStyle = {
        fontFamily: font ? font : 'Arial',
        fontSize: fontSize ? `${fontSize}em` : '1.25em'
    }

    return(
        <div className='works-content' id={postData.title}>
                <ContentEditor setFont={setFont} setFontSize={setFontSize} font={font} fontSize={fontSize}/>
                <h2 style={textStyle}>{postData.title}</h2>
                <div className='content-container' style={textStyle}>
                    {content}</div>  
                <PostNav data={collapsedData} postData={postData}/>
        </div>
    )
}