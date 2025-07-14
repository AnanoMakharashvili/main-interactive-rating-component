import illustration from "../assets/illustration-thank-you.svg";

const SecondHeader = () => {
  return (
    <div className="second-header-container">
      <img src={illustration} alt="Thank you illustration" />
      <span className="selected-rating">You selected 4 out of 5</span>
    </div>
  );
};

export default SecondHeader;
