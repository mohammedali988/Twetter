import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
import { useState } from "react";
import SignUp from "./signup";
import { configureStore } from '@reduxjs/toolkit';
import appReducer from "../reducer";

export const check = { type : 'false'}
console.log(check.type, "hereeeeeeeeeeeeeeee")

function SignIn (){
    const[username, setUsername] = useState("");
    const[pass, setPass] = useState('');
    const [component, setComponent] = useState(true);
    
///////////////////////
    const store = configureStore({ reducer: appReducer })
    // console.log("hiiiiiiiiiiii")
    // console.log(store.getState())
////////////////////////////////
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(username, pass)
        const user={
            "username" : username,
            "userPass" : pass,
            }
        axios
        .post ("http://127.0.0.1:8000/login/", user)
        .then( response => {
            if(response.data){
                store.dispatch({ type: 'true' , Payload : username})
                
                // console.log(store.getState())
                window.location="/"
            }else (alert("maybe username or basswoed not correct try again"))
        }).catch( err => {
            console.log(err)
        })
        
    }
    return (
        component ? (
        <form onSubmit={onSubmit}>
            <div className="signin">
                <FontAwesomeIcon icon={faAddressBook} className="icone"/>
                <p>
                    Log in to Twitter
                </p>
                <div className="in">
                    <input onChange = { (e) => {setUsername(e.target.value)}} placeholder="Your Email" required/>
                    <input type="password" onChange ={ (e) => {setPass(e.target.value)}} placeholder="Your Password" required/>
                    <button type = "submit"> SignIn </button>
                </div>
                <h4> If you did not have account 
                    <a onClick = {()=>{
                        setComponent(false)
                    }} style = {{cursor: "pointer", color:"blue"}}> SignUp</a>
                </h4>
            </div>
        </form>
        ) : <SignUp />
    )

}
export default SignIn;