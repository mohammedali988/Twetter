import Navbar from "../components/navbar";
import Search from "../components/search";
import Tweets from "../components/tweets";
import "../App.css";
import "./explore.css";

function BookMarks (){
    return (
        <div className="home">
            <Navbar />
            <div className="contentBO">
                <Tweets />
            </div>
            <div className="sidebarE">
                <button className="bt1">Tweets</button>
                <button className="bt6">Tweets & reply</button>
                <button className="bt7">Media</button>
                <button className="bt8">Likes</button>
            </div>
        </div>
    )
}

export default BookMarks;