import Timer from "./guis/timer";
import Cells from "./guis/cells";
import FlightBooker from "./guis/flightbooker";
import Counter from "./guis/counter";
import Crud from "./guis/crud";
import Temperature from "./guis/temperature";
import CircleDrawer from "./guis/circledrawer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/counter'>
          <Counter />
        </Route>
        <Route path='/temperature'>
          <Temperature />
        </Route>
        <Route path='/flight-booker'>
          <FlightBooker />
        </Route>
        <Route path='/timer'>
          <Timer />
        </Route>
        <Route path='/crud'>
          <Crud />
        </Route>
        <Route path='/circle-drawer'>
          <CircleDrawer />
        </Route>
        <Route path='/cells'>
          <Cells />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
