import LatestPostMain from "./latest-post-main";
import LatestPostItem from "./latest-posts-item";

export default function LatestPosts(props){
    const {data} = props;

    return(
        <div class='latest-posts'>
            <h2>Latest Works...</h2>
            <LatestPostMain post={data[0]}/>
            <div className='latest-posts-list'>
                <h2>Previous...</h2>
                <ul>
                {data.map((d, i) => {
                    if(i != 0){
                        return(
                            <LatestPostItem key={i} title={d.title} date={d.date}/>
                         )
                    }
                })}
            </ul>
            </div>
            
        </div>
    )
}