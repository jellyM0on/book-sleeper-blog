export default function Post(props){
    const {data} = props; 

    return(
        <div>
            <h2>{data.title}</h2>
            <p>{data.content}</p>

        </div>
    )
}