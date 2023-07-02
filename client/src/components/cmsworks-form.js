import { useState } from "react";
import { useWorksContext } from "../hooks/useWorksContext";

export default function AddWorksForm(){
    const { dispatch } = useWorksContext()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault() 
        const work = {title, content, date}

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
            dispatch({type: 'CREATE_WORK', payload: json})
        }
    }
    return(
        <form>
            <label for='title'>Title: </label>
            <input name='title' type='text' required onChange={(e) => setTitle(e.target.value)}></input>
            <label for='content'>Body: </label>
            <input name='content' type='text' required onChange={(e) => setContent(e.target.value)}></input>
            <label for='date'>Date: </label>
            <input name='date' type='date' defaultValue={`${new Date().toISOString().slice(0, 10)}`} required onChange={(e) => { setDate(e.target.value)}
                }></input>
            <button onClick={handleSubmit}>Add Work</button>
        </form>
    )
}