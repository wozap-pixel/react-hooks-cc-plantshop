import React from "react";

function Header() {
  return (
    <header>
      <h1>
        Plantsy{" "}
        <span className="logo" role="img" aria-label="plant logo">
          🌱
        </span>
      </h1>
      <p className="subtitle">feeling plantsy? take a look</p>
    </header>
  );
}

export default Header;