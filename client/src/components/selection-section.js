import { Link } from "react-router-dom";

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
                    <Link to={`./${d.title}`}> <p key={i}>{d.title}</p></Link>
                )
            })}
            </div>
           
        </div>
    )

}