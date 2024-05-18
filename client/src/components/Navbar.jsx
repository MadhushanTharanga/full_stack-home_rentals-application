import React from "react";

const Navbar = () => {
  return (
    <div>
      <a href="/">
        <img src="../src/assets/logo.jpg" alt="logo" />
      </a>
      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
