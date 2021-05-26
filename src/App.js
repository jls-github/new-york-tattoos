import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Artists from "./components/Artists";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/artists">
            <Artists />
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
