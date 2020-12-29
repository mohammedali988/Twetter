import Navbar from "../components/navbar";
import Tweets from "../components/tweets";
import "./profile.css"


function Profile(){
    return(
        <div>
            <div className="Pimge" >
                <img src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg" style={{width:"100%", height:"100%", borderRadius:"8px"}}/>
            </div>
            <div className="information">
                <h3>Mohammed</h3>
            </div>
            <div className="img">
                <img src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg" style={{width:"100%", height:"100%"}}/>
            </div>
            <div className="home">
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
        </div>
    )
}
export default Profile;