import "./App.css";
import { Header, Main, Footer } from "./components";
import { SecondHeader } from "./secondpagecomponents";
import "./index.css";
import React from "react";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
      <SecondHeader />
    </div>
  );
}

export default App;
