export default function ContentEditor(props){
    const {setFont, setFontSize, font, fontSize} = props; 

    function changeFont(e){
        setFont(e.target.value); 
    }

    function changeSize(e){
        setFontSize(e.target.value); 
    }

    return(
        <div className='content-editor'>
            <label htmlFor='select-font-btn'>Font</label>
            <select className='select-font' onChange={changeFont} value={font} name='select-font' id='select-font-btn'>
                <option value='Arial' >Arial</option>
                <option value='Times New Roman'>Times New Roman</option>
                <option value='Calibri'>Calibri</option>
                <option value='Helvetica'>Helvetica</option>
            </select>
            <label htmlFor='font-size-btn'>Size</label>
            <input name='font-size'className='select-size' id='font-size-btn' onChange={changeSize} type='number' value={fontSize ? fontSize : 1.25} min={0.5} max={2} step={0.25}></input>
        </div>
    )
}

//