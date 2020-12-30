import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import axios from "axios"
import "../App.css";

function Tweets(){

    const[users, setUsers] = useState([]);
    const[comment, setComment]= useState("");
    const[comments, setComments] = useState([]);

    useEffect(() =>{
        axios
        .get("http://127.0.0.1:8000/tweet/")
        .then( response => {
            console.log(response.data, "hereeeeeeeeeeeeeeeeeeeeee");
            setUsers(response.data)
        }).catch( err =>{
            console.log(err, "errrrrrr hereeeeeeeee")
        })
    }, []);

    // useEffect(()=>{
    //     axios
    //     .get("http://127.0.0.1:8000/comment/")
    //     .then( response => {
    //         setComments(response.data)
    //     }).catch( err =>{console.log(err, "err in getComments")})
    // })
    
    const onChange = (e) => {
        setComment(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const comm = { 
            comm_text : comment,
            comm_id : "bebo"
        }
        axios
        .post ("http://127.0.0.1:8000/comment/", comm)
        .then ( response => {
            console.log("hello")
            if(response.data){
                setComment("")
            }
        }).catch(err => {
            console.log(err, "errrrr here in comment")
        })
    }


    return (
        <form onSubmit = {onSubmit}>
            <div className="posts" >
                {users.map( user =>{
                    return (
                        <div className="posts">
                            <div className="whom">
                                {/* <div className="photo1"> */}
                                    <img style={{objectFit:"cover"}} src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                {/* </div> */}
                                <div className="personal">
                                    <h4>{user.tweet_id}</h4>
                                    <h6> time </h6>
                                </div>
                            </div>
                            <div className="post">
                                <p> {user.tweet_text} </p>
                                {/* { user.img }
                                <img src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg"/> */}
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
                                    <img style ={{objectFit:"cover"}} src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                                </div>
                                <div className="input">
                                    <input onChange={onChange} value={comment} placeholder="Tweet to reply"/>
                                </div>
                            </div> 
                            {/* <div>
                                {comments.map( e => {
                                    return(
                                        <div>{e.comm_text}</div>
                                    )
                                })}
                            </div> */}
                        </div>
                    )
                })}
            </div>
        </form>
    )
}
export default Tweets;