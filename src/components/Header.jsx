import starIcon from "../assets/icon-star.svg";

const Header = () => {
  return (
    <div>
      <img
        style={{
          backgroundColor: "#262E38",
          padding: "10px",
          borderRadius: "16px",
          display: "flex",
        }}
        src={starIcon}
        alt="star icon"
        width="13"
      />
    </div>
  );
};

export default Header;
