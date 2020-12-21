import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/home"

function App() {
  return (
    <div className="back">
        <Router>
          <div calssName="App">
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch> 
          </div>
        </Router>
    </div>
  );
}

export default App;

   