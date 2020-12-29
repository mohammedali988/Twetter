import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Navbar () {
    return (
    <div className="navbar">
        <FontAwesomeIcon icon={faAddressBook} className="icon1"/>
        <h3> <a href="/">Tweeter</a> </h3>
        <button className="home1" > 
            <a href="/"> Home </a>
         </button>
        <button className="explore" >
            <a href="/ex"> Explore </a>
        </button>
        <button className="bookmarks">
            <a href="/boo"> Book Marks </a>
        </button>
    </div>
    )
}

export default Navbar;