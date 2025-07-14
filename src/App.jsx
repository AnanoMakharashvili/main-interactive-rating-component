import "./App.css";
import { Header, Main, Footer } from "./components";
import { SecondHeader, SecondMain } from "./secondpagecomponents";
import "./index.css";
import React, { useState } from "react";

function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const handleSubmit = () => {
    setShowSecondPage(true);
  };
  return (
    <div className="container">
      {!showSecondPage ? (
        <>
          <Header />
          <Main />
          <Footer onSubmit={handleSubmit} />
        </>
      ) : (
        <>
          <SecondHeader />
          <SecondMain />
        </>
      )}
    </div>
  );
}
export default App;
