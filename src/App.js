import { Switch, Route } from "react-router-dom";
import Timer from "./pages/Timer";
import Clock from "./pages/Clock";
import Countdown from "./pages/Countdown";
import Settings from "./pages/Settings";
import Provider from "./context/Provider";
import About from "./pages/About";

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/" component={Clock} />
        <Route path="/countdown" component={Countdown} />
        <Route path="/timer" component={Timer} />
        <Route path="/settings" component={Settings} />
        <Route path="/about" component={About} />
      </Provider>
    </Switch>
  );
}

export default App;
