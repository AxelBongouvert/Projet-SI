import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters, totalVolume }) => {
  return (
    <nav class="navbar navbar-expand navbar-light bg-danger topbar static-top shadow">
      <ul class="navbar-nav w-100 d-flex justify-content-around">
        <li class="nav-item no-arrow">
          <span class="badge badge-pill badge-info m-4" style={{ width: 75 }}>
            <li class="nav-item no-arrow">{totalCounters}</li>
            <li class="nav-item no-arrow">Items</li>
          </span>
        </li>
        <li class="nav-item no-arrow">
          <span class="badge badge-pill badge-info m-4" style={{ width: 125 }}>
            <li class="nav-item no-arrow">{totalVolume}</li>
            <li class="nav-item no-arrow">Volume (m3)</li>
          </span>
        </li>
        <li class="nav-item no-arrow">
          <a href="/CheckCamions">
            <button class="btn btn-success btn-circle mt-3">
              <i class="fas fa-check"></i>
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
