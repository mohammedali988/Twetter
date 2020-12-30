import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function WhoToFollow(){
    return (
        <div className="tofollow">
            <h5> Who to foolow</h5>
            <div className="photo3">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            </div>
            <h4>mohammed</h4>
            <h6> time </h6>
            <button > <FontAwesomeIcon icon={faAddressBook} className="icon3"/> Follow </button>
            <p> some thing write here </p>
            <div className="photo4">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            </div>
        </div>
    )
}

export default WhoToFollow;