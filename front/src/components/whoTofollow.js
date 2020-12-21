import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function WhoToFollow(){
    return (
        <div className="tofollow">
            <h5> Who to foolow</h5>
            <div className="photo3">
                <img src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg" />
            </div>
            <h4>mohammed</h4>
            <h6> time </h6>
            <button > <FontAwesomeIcon icon={faAddressBook} className="icon3"/> Follow </button>
            <p> some thing write here </p>
            <div className="photo4">
                <img src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg" />
            </div>
        </div>
    )
}

export default WhoToFollow;