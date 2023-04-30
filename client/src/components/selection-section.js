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
                                <p>{x.title}</p>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )

}