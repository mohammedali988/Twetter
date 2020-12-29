import "../App.css";
import "./explore.css";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Tweets from "../components/tweets";

function Explore(){
    return(
        <div className="home">
            <Navbar />
            <div className="contentE">
                <Search />
                <Tweets />
            </div>
            <div className="sidebarE">
                <button className="bt1">Top</button>
                <button className="bt2">Latest</button>
                <button className="bt3">People</button>
                <button className="bt4">Media</button>
            </div>
        </div>
    )
}

export default Explore;