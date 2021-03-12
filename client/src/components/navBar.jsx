import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters , totalVolume}) => {
  return (
    <nav className="navbar navbar-light bg-primary fixed-bottom">
      <div className="navbar-brand">        
        <span className="badge badge-pill badge-info m-1" style={{ width: 50 }}>
          {totalCounters}
        </span>
        Items
        <span className="badge badge-pill badge-info m-1" style={{ width: 50 }}>
          {totalVolume}
        </span>
        Volume (m3)
      </div>
      <a href="/CheckCamions" class="btn btn-success btn-circle">
          <i class="fas fa-check"></i> 
     </a>
    </nav>
  );
};

export default NavBar;