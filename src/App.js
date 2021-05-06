import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Home from "./components/Home";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/pricing" component={Pricing} />

          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
