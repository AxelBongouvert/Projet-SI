import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters , totalVolume}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">        
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
        Items
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalVolume}
        </span>
        Volume (m3)
      </div>
    </nav>
  );
};

export default NavBar;