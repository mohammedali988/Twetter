import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome" ;
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "../App.css"


function Test(){
    return (
        <div className="test" style={{margin: "auto"}, {width: "50%"},{padding: "355px"}}>
            <Popup trigger={<button> Trigger</button>} position="right center">
            <div className="signin">
                <FontAwesomeIcon icon={faAddressBook} className="icone"/>
                <p>
                    Log in to Twitter
                </p>
                <div className="in">
                    <input  placeholder="Your Email"/>
                    <input type="password" placeholder="Your Password"/>
                    <button type = "submit"> SignIn </button>
                </div>
                <h4> If you did not have account 
                    <a href = "/"> SignUp </a>
                </h4>
            </div>
        </Popup>
        </div>
    )
}

export default Test;
