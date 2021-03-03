import { Route, Switch } from "react-router"
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from "./components/Home";
import LeaderBoard from "./components/LeaderBoard";
import Marks from "./components/Marks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/leaderboard" component={LeaderBoard} />
         <Route path="/form" component={Marks} />
         </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
