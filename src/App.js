import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Landing></Landing>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
