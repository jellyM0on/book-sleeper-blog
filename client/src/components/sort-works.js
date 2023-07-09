export default function Sort({sortKey, setSortKey}){

    function assignKey(event){
      setSortKey(event.target.value); 
    }

    return(
        <div className='sort-dropdown'>
            <label htmlFor='sort-key-drp' className='sortKey'>sort by: </label>
            <select className='sortKey' name='sortKey' id='sort-key-drp'onChange={assignKey} defaultValue={!sortKey ? 'date' : sortKey}>
                <option value='date'>date</option>
                <option value='alphabet'>alphabet</option>
            </select>
        </div>
        
    )
}
