import './App.css';
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper"
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Wrapper>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/SearchPage" component={SearchPage} />
          <Route exact path="/SavedPage" component={SavedPage} />
        </Wrapper>
      </div>
    </Router>
  );
};

export default App;
