import ContentEditor from './works-content-editor';
import PostNav from './post-page-nav'; 
import { useOutletContext } from 'react-router-dom';

export default function Post(props){
    const {data, postData} = props; 

    const {font, setFont, fontSize, setFontSize, sortedData} = useOutletContext(); 

    let collapsedData = []; 
    
    if (sortedData){
        sortedData.forEach((d,i) => {
           d.works.forEach((x, i) => {
            collapsedData.push(x); 
           })
        })
    }
    
    const content = postData.content;

    const textStyle = {
        fontFamily: font ? font : 'Times New Roman',
        fontSize: fontSize ? `${fontSize}em` : '1.25em'
    }

    return(
        <div class='works-content' id={postData.title}>
                <ContentEditor setFont={setFont} setFontSize={setFontSize} font={font} fontSize={fontSize}/>
                <h2 style={textStyle}>{postData.title}</h2>
                <p style={textStyle}>
                    {content}</p>  
                <PostNav data={collapsedData} postData={postData}/>
        </div>
    )
}