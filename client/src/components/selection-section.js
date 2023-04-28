export default function Section(props){
    const {key, content} = props; 

    return(
        <div>
            <div>
                <p>{key}</p>
            </div>
            <div>
            {content.map((d, i) => {
                return(
                    <p key='i'>{d}</p>
                )
            })}
            </div>
           
        </div>
    )

}