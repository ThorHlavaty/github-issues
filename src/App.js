import { useEffect, useState } from "react";
import { NavLink, Redirect, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import IssueDetail from "./components/IssueDetail/IssueDetail";
import IssueList from "./components/IssueList/IssueList";
import IssuesByLabel from "./components/IssuesByLabel/IssuesByLabel";
import UserPage from "./components/UserPage/UserPage";
import Users from "./components/Users/Users";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) {
      history.push("/");
    }
  }, [loggedIn, history]);

  return (
    <>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        {loggedIn && (
          
          <li>
            <NavLink to="/issues">Issues</NavLink>
          </li>
          
        )}
        {loggedIn && (
          
          <li>
            <NavLink to="/users">User Search</NavLink>
          </li>
          
        )}
        {loggedIn ? (
          <li>
            <button
              onClick={() => {
                setLoggedIn(false);
              }}
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button
              onClick={() => {
                setLoggedIn(true);
              }}
            >
              Log In
            </button>
          </li>
        )}
      </ul>
      <div>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          {loggedIn && (
            <>
              <Route path="/issues" component={IssueList} />
              <Route path="/issues/:number" component={IssueList} />
              <Route path="/labels/:name" component={IssuesByLabel} />
              <Route path="/issue/:issueNumber" component={IssueDetail}/>
              <Route exact path="/users" component={Users}/>
              <Route path="/users/:username" component={UserPage}/>
            </>
          )}
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
