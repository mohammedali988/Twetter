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
            // tweet_text: tweet,
            // tweet_date : "12/9/2020 7:30 pm", 
            // Tweet_id : 123
            text : tweet
        }

        axios
        .post("http://127.0.0.1:8000/test/" , data)
        .then(response =>{
            if(response.data === true){
               alert("it os done ") 
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
                        <img src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg"/>
                    </div>
                    <textarea placeholder="whats happining ?" onChange={onChange}>
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