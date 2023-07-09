import { Link } from "react-router-dom";

export default function WorksList({data}){
    return(
        <div className='works-list'>
            {data.map((d, i) => {
                return(
                    <div className='works-list-section' key={i}> 
                        <h3>{d.key}...</h3>
                        {d.works.map((x, i) => {
                            return(
                                <Link to={`./${x._id}`} key={i}> <p>{x.title}</p></Link>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}