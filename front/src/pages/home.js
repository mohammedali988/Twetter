import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import  image  from "@fortawesome/free-solid-svg-icons";
// import "./profile.jpg"
import Navbar from "../components/navbar";
import ForTweet from "../components/forTweet";
import Tweets from "../components/tweets";
import Trends from "../components/trende"
import WhoToFollow from "../components/whoTofollow";

function Home(){
    return (
        <div className="home">
            <Navbar />
            <div className="content">
                <ForTweet />
                <Tweets />
            </div>
            <div className="sidebar">
                <Trends />
                <WhoToFollow />
            </div>
        </div>
    )
}
export default Home;
