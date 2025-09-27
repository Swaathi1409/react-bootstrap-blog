// Header component that displays a heading passed as a prop

import React from "react";

function Header({ heading }) {
  return (
    <div className="mb-4">
      <h1>{heading}</h1>
    </div>
  );
}

export default Header;
