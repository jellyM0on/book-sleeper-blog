import { useState } from "react";
import { useWorksContext } from "../hooks/useWorksContext";
import { useEffect } from "react";

export default function AddWorksForm(){
    const { dispatch } = useWorksContext()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(null)


    useEffect(() => {
        setDate(new Date());
    }, [])

    function formatContent(content){
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

    const handleSubmit = async(e) => {
        e.preventDefault() 
        let formattedContent = `<p>${content}</p>`
        const work = {title, content: formatContent(content), date}
        console.log(work.content)

        const response = await fetch('http://localhost:5000/', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(work)

        })

        const json = await response.json();
        if(!response.ok){
            console.log(work);
            setError(json.error);
        } else {
            console.log('new work created'); 
            setTitle('')
            setContent('')
            setDate(new Date());
            dispatch({type: 'CREATE_WORK', payload: json})
            window.location.reload();
        }
    }

    function formatDispatch(json){
        console.log(json)
    }

    return(
        <form className='cms-form'>
            <h3>Create a new post</h3>
            <div>
                <label htmlFor='add-title'>Title: </label>
                <input name='title' id='add-title' type='text' required onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='add-date'>Date: </label>
                <input name='date' id='add-date' type='date' defaultValue={new Date().toISOString().slice(0, 10)} required onChange={(e) => { setDate(new Date(e.target.value))}
                }></input>
            </div>
            <label htmlFor='add-content'>Body: </label>
            <textarea name='content' id='add-content' type='text' required onChange={(e) => setContent(e.target.value)}></textarea>
                
            <div className='cms-form-btns'>
                <button onClick={handleSubmit} className='cms-save-btn'>Save post</button>
            </div>
        </form>
    )
}