import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Tweets(){
    return (
            <div className="posts" >
                <div className="whom">
                    {/* <div className="photo1"> */}
                        <img src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg"/>
                    {/* </div> */}
                    <div className="personal">
                        <h4>mohammed</h4>
                        <h6> time </h6>
                    </div>
                </div>
                <div className="post">
                    <p> somthing hereee </p>
                    <img src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg"/>
                </div>
                <div className="reaction">
                    <button className='button1' >
                        <FontAwesomeIcon icon={faAddressBook} className="icon3"/>
                        comment
                    </button>
                    <button className='button2' >
                        <FontAwesomeIcon icon={faAddressBook} className="icon3" />
                        Retweet
                    </button>
                    <button className='button3' >
                        <FontAwesomeIcon icon={faAddressBook} className="icon3"/>
                        Like
                    </button>
                    <button className='button4' >
                        <FontAwesomeIcon icon={faAddressBook} className="icon3"/>
                        Save
                    </button>
                </div>
                <div className="comment">
                    <div className="photo2">
                        <img src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg"/>
                    </div>
                    <div className="input">
                        <input placeholder="Tweet to reply"/>
                    </div>
                </div> 
            </div>
    )
}
export default Tweets;