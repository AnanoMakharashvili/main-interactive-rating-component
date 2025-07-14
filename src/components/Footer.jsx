import React from "react";

const Footer = ({ onSubmit }) => {
  return (
    <button className="submit-button" onClick={onSubmit}>
      SUBMIT
    </button>
  );
};

export default Footer;
