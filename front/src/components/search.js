import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "./search.css"

function Search(){
    return (
        <div className="search">
            <div className="icons">
                <FontAwesomeIcon icon={faAddressBook} className="icon1"/>
            </div>
            <div className="input">
                <input placeholder="Search"/>
                <button> Search </button>
            </div>
            {/* <div className="button">
            </div> */}
        </div>
    )
}

export default Search;