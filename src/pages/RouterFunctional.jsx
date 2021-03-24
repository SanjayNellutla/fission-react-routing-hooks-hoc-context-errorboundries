import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom";
import { createBrowserHistory } from "history";

// Covers how to extract query params
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Users = () => {
  const query = useQuery();
  return <div>Query params - {query.get("isAdmin") || "none"}</div>;
};

// Covers useHistory & and Link navigations
const Login = () => {
  const route = "/dashboard";
  const history = useHistory();

  return (
    <div className="card">
      <div className="card-header">
        <strong>Page:</strong> {history.location.pathname}
      </div>
      <div className="card-body">
        <div className="card-title">Navigate to Dashboard:</div>
      </div>
      <div className="card-footer btn-group">
        <Link className="text-center btn btn-link" to={route}>
          Link
        </Link>
        <button
          className="btn btn-primary btn-sm ml-2"
          onClick={() => history.push(route)}
        >
          Programmatically
        </button>
      </div>
    </div>
  );
};

// Covers how to extract path params
const User = () => {
  let { id } = useParams();
  return <div>Path parameter - {id}</div>;
};

// Covers nested routing
const Dashboard = () => {
  const history = useHistory();

  return (
    <div className="card">
      <div className="card-header">
        <strong>Page:</strong> {history.location.pathname}{" "}
        <button
          className="btn btn-outline-primary btn-sm ml-2"
          onClick={() => history.push("/login")}
        >
          Back To Login
        </button>
      </div>
      <div className="card-body">
        <Switch>
          <Route exact path="/dashboard">
            <Redirect to="/dashboard/users?isAdmin=true" />
          </Route>
          <Route path="/dashboard/users" component={Users}></Route>
          <Route path="/dashboard/user/:id" component={User}></Route>
        </Switch>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary btn-sm ml-2"
          onClick={() => history.push("/dashboard/users?isAdmin=true")}
        >
          Query Param
        </button>
        <button
          className="btn btn-primary btn-sm ml-2"
          onClick={() => history.push("/dashboard/user/1")}
        >
          Path Param
        </button>
      </div>
    </div>
  );
};

const historyContext = createBrowserHistory();

const RouterApp = () => {
  return (
    <div className="container py-5">
      <Router history={historyContext}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default RouterApp;
