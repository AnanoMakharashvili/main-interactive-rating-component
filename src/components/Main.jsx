const Main = ({ selectedRating, setSelectedRating }) => {
  const handleClick = (number) => {
    setSelectedRating(number);
  };

  return (
    <div className="main-container">
      <h1 className="main-title">How did we do?</h1>
      <p className="main-description">
        Please let us know how we did with your
        <br /> support request. All feedback is appreciated <br />
        to help us improve our offering!
      </p>

      <div className="span-container">
        {[1, 2, 3, 4, 5].map((number) => (
          <span
            key={number}
            className={`rating-number ${
              selectedRating === number ? "selected" : ""
            }`}
            onClick={() => handleClick(number)}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Main;
