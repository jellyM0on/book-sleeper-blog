import { Link } from "react-router-dom";

export default function WorksList(props){
    const {key, data} = props; 

    return(
        <div class='works-list'>
            {data.map((d, i) => {
                return(
                    <div class='works-list-section'> 
                        <h3>{d.key}...</h3>
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