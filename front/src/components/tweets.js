import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios"
import "../App.css";

function Tweets(){

    const[users, setUsers] = useState([]);
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiii")

    useEffect(() =>{
        axios
        .get("http://127.0.0.1:8000/users/")
        .then( response => {
            console.log(response.data, "hereeeeeeeeeeeeeeeeeeeeee");
            setUsers(response.data)
        }).catch( err =>{
            console.log(err, "errrrrrr hereeeeeeeee")
        })
    }, []);
    
    return (
            <div className="posts" >
                {users.map( user =>{
                    return (
                        <div className="posts">
                            <div className="whom">
                                {/* <div className="photo1"> */}
                                    <img src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg"/>
                                {/* </div> */}
                                <div className="personal">
                                    <h4>{user.username}</h4>
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
                })}
            </div>
    )
}
export default Tweets;