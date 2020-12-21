import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Navbar () {
    return (
    <div className="navbar">
        <FontAwesomeIcon icon={faAddressBook} className="icon1"/>
        <h3> Tweeter </h3>
        <button className="home1"> Home </button>
        <button className="explore"> Explore </button>
        <button className="bookmarks"> Book Marks </button>
    </div>
    )
}

export default Navbar;