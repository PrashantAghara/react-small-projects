import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Index from "./components/layouts/Index";
import { Provider } from "./contexts";
import Lyrics from "./components/tracks/Lyrics";

function App() {
  return (
    <Provider>
      <Router>
        <>
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/" component={Index} exact />
              <Route path="/lyrics/track/:id" component={Lyrics} exact />
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
