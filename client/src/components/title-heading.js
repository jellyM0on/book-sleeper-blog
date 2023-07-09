export default function Title(props){  
    const {titleClass} = props; 

    return(
        <div className={`title ${titleClass}`} >
            <h1>book<br></br>sleeper</h1>
            <h2>a poetry blog</h2>
            
        </div>
        
    )
}

