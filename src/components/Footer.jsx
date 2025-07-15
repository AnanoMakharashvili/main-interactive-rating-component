import React from "react";

const Footer = ({ onSubmit, selectedRating }) => {
  return (
    <button
      className={`submit-button ${selectedRating !== null ? "active" : ""}`}
      onClick={onSubmit}
      disabled={selectedRating === null}
    >
      SUBMIT
    </button>
  );
};

export default Footer;
