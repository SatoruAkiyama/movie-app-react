import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Movie from "./components/movie/Movie";
import Footer from "./components/nav/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:movieId" component={Movie} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
