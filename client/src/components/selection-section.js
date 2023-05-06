import { Link } from "react-router-dom";

export default function WorksList({data}){
    return(
        <div class='works-list'>
            {data.map((d, i) => {
                return(
                    <div class='works-list-section'> 
                        <h3>{d.key}...</h3>
                        {d.works.map((x, y) => {
                            return(
                                <Link to={`./${x._id}`}> <p>{x.title}</p></Link>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}