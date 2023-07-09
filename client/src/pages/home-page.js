import Title from '../components/title-heading'
import About from '../components/about';
import LatestPosts from '../components/latest-posts';

function Home(props){
    const {latestData} = props;

    return(
        <div className='home-page'>
            <Title titleClass='home-title'/>
            <About/>
            <LatestPosts data={latestData}/>
        </div>
    )
}

export default Home;