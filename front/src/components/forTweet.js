import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { useState } from "react";
import axios from "axios";


function ForTweet(){
    
    const[tweet, setTweet] = useState("");

    const onChange = (e) =>{
        setTweet(e.target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(tweet)
        const data = {
            tweet_text : tweet,
            tweet_id: "Mohammed"
        }
        axios
        .post("http://127.0.0.1:8000/tweet/" , data)
        .then(response =>{
            if(response.data === true){
               setTweet('')
            }else {
                alert("there is some thing wrong")
            }
        })
        .catch( err => {
            console.log(err + " err hereeeeeeeeeeees")
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="forpost">
                <h4>Tweet Somthing</h4>
                <div className="tweet">
                    <div className="photo">
                        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                    </div>
                    <textarea placeholder="whats happining ?" value={tweet} onChange={onChange}>
                    </textarea>
                </div>
                <div className="tweet1">
                    <FontAwesomeIcon icon={faAddressBook} />
                    <FontAwesomeIcon icon={faAddressBook} />
                    <h5> every one can reply </h5>
                    <button type="submit" > Tweet </button>
                </div>
            </div>
        </form>
    )
}
export default ForTweet;