export default function Section(props){
    const {key, data} = props; 

    console.log(data); 
    return(
        <div>
            <div>
                <p>{key}</p>
            </div>
            <div>
            {data.map((d, i) => {
                return(
                    <p key={i}>{d.title}</p>
                )
            })}
            </div>
           
        </div>
    )

}