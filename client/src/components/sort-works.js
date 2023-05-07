export default function Sort({sortKey, setSortKey}){

    function assignKey(event){
      setSortKey(event.target.value); 
    }

    return(
        <div class='sort-dropdown'>
            <label for='sortKey' class='sortKey'>sort by: </label>
            <select class='sortKey' name='sortKey' onChange={assignKey} defaultValue={!sortKey ? 'date' : sortKey}>
                <option value='date'>date</option>
                <option value='alphabet'>alphabet</option>
            </select>
        </div>
        
    )
}
