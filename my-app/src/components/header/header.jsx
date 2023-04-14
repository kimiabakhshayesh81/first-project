import React from "react";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  return (
    <nav id="mainNav">
      <div className="Navbar">
        <h1>where in the world?</h1>
        <h1 className="NavDark"> DarkMode{/* {<DarkModeIcon />} */}</h1>
      </div>
    </nav>
  );
};

export default Header;
