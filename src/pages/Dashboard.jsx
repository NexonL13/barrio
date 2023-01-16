import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiHammerLine } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { HiLogout } from "react-icons/hi";
import Modify from "../components/Modify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reports from "../components/Reports";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_sidebar">
        <div className="sidebar_header">
          <div className="sidebar_logo">
            <img src={logo} className="admin_logo" />
          </div>
          <h1 className="sidebar_brand">Barrio</h1>
        </div>

        <form class="search-container">
          <input type="text" id="search-bar" placeholder="Search" />
          <a href="#">
            <img
              class="search-icon"
              src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
            />
          </a>
        </form>

        <Link to="/" className="sidebar_navigate">
          <MdOutlineSpaceDashboard className="sidebar_nav-icon" />
          <p>Dashboard</p>
        </Link>
        <Link to="/admin-equipments" className="sidebar_navigate">
          <RiHammerLine className="sidebar_nav-icon" />
          <p>Equipments</p>
        </Link>
        <Link to="/admin-schedule" className="sidebar_navigate">
          <AiOutlineFieldTime className="sidebar_nav-icon" />
          <p>Schedules</p>
        </Link>

        <Link to="/" className="sidebar_navigate margin-auto-down">
          <CgWebsite className="sidebar_nav-icon" />
          <p>Visit Homepage</p>
        </Link>
        <Link to="/" className="sidebar_navigate sidebar_logout">
          <p>Log Out</p>
          <HiLogout className="sidebar_nav-icon" />
        </Link>
      </div>
      <main className="dashboard_main">
        <Routes>
          <Route path="/admin-equipments" element={<Modify />} />
          <Route path="/admin-schedule" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
