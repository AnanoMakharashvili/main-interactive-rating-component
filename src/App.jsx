import "./App.css";
import { Header, Main, Footer } from "./components";
import { SecondHeader, SecondMain } from "./secondpagecomponents";
import "./index.css";
import React, { useState } from "react";

function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleSubmit = () => {
    if (selectedRating !== null) {
      setShowSecondPage(true);
    }
  };

  return (
    <div className="container">
      {!showSecondPage ? (
        <>
          <Header />
          <Main
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
          />
          <Footer onSubmit={handleSubmit} selectedRating={selectedRating} />
        </>
      ) : (
        <>
          <SecondHeader selectedRating={selectedRating} />
          <SecondMain selectedRating={selectedRating} />
        </>
      )}
    </div>
  );
}
export default App;
