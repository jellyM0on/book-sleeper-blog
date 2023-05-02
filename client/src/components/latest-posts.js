import LatestPostItem from "./latest-posts-item";

export default function LatestPosts(props){
    const {data} = props;
    console.log(data); 
    return(
        <div class='latest-posts'>
            <h2>Latest Works...</h2>
            <ul>
                {data.map((d, i) => {
                    return(
                       <LatestPostItem key={i} title={d.title} date={d.date}/>
                    )
                })}
            </ul>
        </div>
    )
}