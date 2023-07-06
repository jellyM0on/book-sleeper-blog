import { useState, useEffect } from "react";
import { useWorksContext } from "../hooks/useWorksContext";
import CMSWorksList from "./cmsworks-works";
import { useLocation } from "react-router-dom";
import parse from 'html-react-parser'
import { useNavigate } from "react-router-dom";

export default function EditWorkForm(props){
    const {work, setSelected} = props; 
    const { works, dispatch } = useWorksContext()

    const [title, setTitle] = useState(``)
    const [content, setContent] = useState()
    const [date, setDate] = useState(``)
    const [id, setId] = useState(``)
    const [error, setError] = useState(null)

    const modifiedDate = (date) => {
        date = new Date(date); 
        const month = date.getMonth() +1; 
        const day = date.getUTCDate() +2; 
        const year = date.getFullYear(); 
        return `${year}-${month}-${day}`
    }

    useEffect(() => {
        if(document.querySelector('#edit-form')){
            let titleForm = document.querySelector('#title-form');
            titleForm.value = work.title
            let dateForm = document.querySelector('#date-form');
            let tempDate = new Date(work.date)
            dateForm.value = new Date(tempDate.getTime() - (tempDate.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
            let bodyForm = document.querySelector('#body-form');
            bodyForm.value = cleanText(work.content);
        }
        setTitle(work.title);
        setContent(cleanText(work.content))
        setDate(modifiedDate(work.date)); 
        setId(work._id);
       
    }, [work])

    const handleSubmit = async(e) => {
        e.preventDefault() 
        const work = {title, content: formatText(content), date}
        console.log(work); 
        const response = await fetch(`http://localhost:5000/${id}`, {
            method: 'PATCH', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(work)
        })


        const json = await response.json();
        if(!response.ok){
            console.log(work);
            setError(json.error);
        } else {
            console.log('work edited'); 
            console.log(work); 
            dispatch({type: 'EDIT_WORK', payload: json})
            window.location.reload(); 
        }
    }

    const handleDelete = async(e) => {
        e.preventDefault() 
        const currIndex = works.findIndex(x => x._id == id); 
        const nextIndex = works[currIndex+1]; 
        const response = await fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE', 
        })
        const json = await response.json()

        if (response.ok) {
          dispatch({type: 'DELETE_WORK', payload: json})
        }

        if(nextIndex){
            window.location.replace(`/content-management/${nextIndex._id}`)
        } else {
            window.location.replace('/content-management'); 
        }
        
    }

    function cleanText(text){
        if(text && typeof(text) == "object"){
            let {props} = text;
            let textArr = props.children; 
            if(Array.isArray(textArr)){
                let newArr = textArr.map((line, i) => {
                    if(typeof(line) !== "object"){
                        return line;
                    } else {
                        return '\n'
                    }
                })
                return newArr.join('')
            } else {
                return textArr
            }
        } else {
            return text
        }
    }

    function formatText(content){
        content = content.split('');
        content.map((x, i) => {
            if(x === '\n'){
                content[i] = '<br>'
            } else {
                return x
            }
        })
        return `<p>${content.join('')}</p>`
    }

    return(
        <div>
            <form className='cms-form' id='edit-form'>
            <h3>Edit post</h3>
            {/* <p>ID: {work._id}</p> */}
            <div>
                <label for='title'>Title: </label>
                <input name='title' type='text' id='title-form' required onChange={(e) =>{ setTitle(e.target.value)} }></input>
            </div>
            <div>
                <label for='date'>Date: </label>
                <input name='date' type='date' id='date-form' required onChange={(e) => { setDate(e.target.value) }
                }></input>
            </div>
            <label for='content'>Body: </label>
            <textarea name='content' type='text' id='body-form' required onChange={(e) => { setContent((e.target.value))} }></textarea>

            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleSubmit}>Save</button>
        </form>
        </div>
       
    )
}