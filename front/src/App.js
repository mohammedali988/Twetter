import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Explore from "./pages/explore"
import Home from "./pages/home"
import BookMarks from "./pages/bookmarks";
import SignIn from "./pages/signin";
import Test from "./pages/test"
import { useState } from 'react';
import Profile from './pages/profile';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./reducer.js";

function App() {
  const[component, setComponent] = useState(false);


  const store = configureStore({ reducer: appReducer })

  console.log(store.getState(), "hiiiiiiiiiii")
  
  return (
    // component ? (
      <div className="back">
        <Router>
          <div calss="App">
            <Switch>
              <Test exact path="/test" />
              <Home exact path="/"/>
              <Explore exact path="/ex" />
              <BookMarks exact path="/boo" />
              <Profile exact path="/profile" />
              <SignIn exact path="/signin" />
            </Switch> 
          </div>
        </Router>
      </div>
    // ) : <SignIn exact path="/signin" />
    )
}

export default App;

   