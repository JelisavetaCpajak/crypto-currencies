import "./App.css";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import DetailsPage from "./pages/DetailsPage";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <h1 style={{ textAlign: "center" }}>Latest Crypto Currencies</h1>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/details" component={DetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
