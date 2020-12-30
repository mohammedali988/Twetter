import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";

function SignUp(){

    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("");
    const[userName, setUserName] = useState('')

    const HundleSubmit = (e) => {
        e.preventDefault();
        const user = {
            userEmali: email,
            username: userName,
            userPass: pass,
        }
        axios
        .post("http://127.0.0.1:8000/signup/", user)
        .then( response => {
            if(response){
                alert(" signUp is done ")
                window.location.href = "http://localhost:3000/signin"
            }
        })
        .catch ( err =>{
            console.log(err, "err hereeeeeeeeeee")
        })
    }

    return (
        <form onSubmit={HundleSubmit}>
            <div className="signup">
                <h3> Create Nnew Account</h3>
                <input  type="email" placeholder="Enter your Email" required onChange={ (e) => {
                    setEmail(e.target.value)
                }}/>
                <input placeholder="Enter your username" required onChange={ (e) => {
                    setUserName(e.target.value)
                }}/>
                <input type="password" placeholder="Enter your Password" required onChange={ (e) => {
                    setPass(e.target.value)
                }}/>
                <button type="submit">SignUp</button>
            </div>
        </form>
    )
}

export default SignUp;