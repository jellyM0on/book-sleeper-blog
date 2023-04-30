import { Link } from "react-router-dom";

export default function WorksList(props){
    const {key, data} = props; 

    console.log(data); 
    return(
        <div>
            {data.map((d, i) => {
                return(
                    <div> 
                        <p>{d.key}</p>
                        {d.works.map((x, y) => {
                            return(
                                <Link to={`./${x.title}`}> <p>{x.title}</p></Link>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )

}