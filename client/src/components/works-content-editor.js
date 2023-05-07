export default function ContentEditor(props){
    const {setFont, setFontSize, font, fontSize} = props; 

    function changeFont(e){
        setFont(e.target.value); 
    }

    function changeSize(e){
        setFontSize(e.target.value); 
    }

    return(
        <div class='content-editor'>
            <select class='select-font' onChange={changeFont} value={font}>
                <option value='Arial' >Arial</option>
                <option value='Times New Roman'>Times New Roman</option>
                <option value='Calibri'>Calibri</option>
                <option value='Helvetica'>Helvetica</option>
            </select>
            <input class='select-size'onChange={changeSize} type='number' value={fontSize ? fontSize : 1.25} min={0.5} max={2} step={0.25}></input>
        </div>
    )
}

//