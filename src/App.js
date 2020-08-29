import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Results from "./Results/Results";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Results />
    </div>
  );
}

export default App;
