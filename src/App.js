import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddEvent from "./Components/AddEvent/AddEvent";
import MyEvents from "./Components/MyEvents/MyEvents";
import AllEvents from "./Components/AllEvents/AllEvents";
import Registration from "./Components/Registration/Registration";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/registration/:id">
            <Registration />
          </PrivateRoute>
          <PrivateRoute path="/myEvents">
            <MyEvents />
          </PrivateRoute>
          <PrivateRoute path="/allEvents">
            <AllEvents />
          </PrivateRoute>
          <PrivateRoute path="/addEvent">
            <AddEvent />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
