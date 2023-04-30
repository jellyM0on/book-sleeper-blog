export default function Sort(props){

    const {setSortKey} = props; 

    function assignKey(event){
      setSortKey(event.target.value); 
    }

    return(
        <div class='sort-dropdown'>
            <label for='sortKey'>sort by: </label>
            <select id='sortKey' name='sortKey' onChange={assignKey}>
                <option value='alphabet'>alphabet</option>
                <option value='date' selected>date</option>
            </select>
        </div>
        
    )
}

//if alphabet
// organize data by title -- sort function 

//if by date
//display as is